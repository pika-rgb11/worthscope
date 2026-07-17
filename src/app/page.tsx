"use client";

import { useMemo, useState } from "react";

type Billionaire = {
  name: string;
  netWorth: number;
  origin: string;
  color: string;
  peopleCategory: PeopleCategory;
};

type Item = {
  name: string;
  price: number;
  icon: string;
  detail: string;
  category: Category;
};

type Category = "All" | "Electronics" | "Cars" | "Real Estate" | "Luxury" | "Sports" | "Others";

type PeopleCategory = "All" | "Billionaires" | "Celebrities" | "Sports Stars" | "Politics" | "India";

type Currency = {
  code: "USD" | "INR" | "EUR" | "GBP" | "AED";
  label: string;
  locale: string;
  rate: number;
};

const billionaires: Billionaire[] = [
  { name: "Elon Musk", netWorth: 927_200_000_000, origin: "Tesla, SpaceX", color: "#f97316", peopleCategory: "Billionaires" },
  { name: "Larry Page", netWorth: 295_200_000_000, origin: "Google", color: "#10b981", peopleCategory: "Billionaires" },
  { name: "Sergey Brin", netWorth: 272_300_000_000, origin: "Google", color: "#0f766e", peopleCategory: "Billionaires" },
  { name: "Jeff Bezos", netWorth: 253_400_000_000, origin: "Amazon", color: "#22c55e", peopleCategory: "Billionaires" },
  { name: "Michael Dell", netWorth: 236_900_000_000, origin: "Dell Technologies", color: "#0284c7", peopleCategory: "Billionaires" },
  { name: "Mark Zuckerberg", netWorth: 207_000_000_000, origin: "Meta", color: "#6366f1", peopleCategory: "Billionaires" },
  { name: "Larry Ellison", netWorth: 183_600_000_000, origin: "Oracle", color: "#ef4444", peopleCategory: "Billionaires" },
  { name: "Jensen Huang", netWorth: 176_500_000_000, origin: "NVIDIA", color: "#65a30d", peopleCategory: "Billionaires" },
  { name: "Bernard Arnault", netWorth: 148_200_000_000, origin: "LVMH", color: "#d946ef", peopleCategory: "Billionaires" },
  { name: "Warren Buffett", netWorth: 147_600_000_000, origin: "Berkshire Hathaway", color: "#84cc16", peopleCategory: "Billionaires" },
  { name: "Amancio Ortega", netWorth: 137_700_000_000, origin: "Zara, Inditex", color: "#57534e", peopleCategory: "Billionaires" },
  { name: "Rob Walton", netWorth: 132_400_000_000, origin: "Walmart", color: "#2563eb", peopleCategory: "Billionaires" },
  { name: "Jim Walton", netWorth: 129_700_000_000, origin: "Walmart", color: "#1d4ed8", peopleCategory: "Billionaires" },
  { name: "Carlos Slim", netWorth: 124_900_000_000, origin: "Telecom", color: "#0e7490", peopleCategory: "Billionaires" },
  { name: "Steve Ballmer", netWorth: 124_000_000_000, origin: "Microsoft, LA Clippers", color: "#3b82f6", peopleCategory: "Billionaires" },
  { name: "Alice Walton", netWorth: 120_900_000_000, origin: "Walmart", color: "#db2777", peopleCategory: "Billionaires" },
  { name: "Michael Bloomberg", netWorth: 109_400_000_000, origin: "Bloomberg LP", color: "#0891b2", peopleCategory: "Billionaires" },
  { name: "Changpeng Zhao", netWorth: 108_500_000_000, origin: "Binance", color: "#eab308", peopleCategory: "Billionaires" },
  { name: "Thomas Peterffy", netWorth: 107_100_000_000, origin: "Interactive Brokers", color: "#16a34a", peopleCategory: "Billionaires" },
  { name: "Bill Gates", netWorth: 106_000_000_000, origin: "Microsoft", color: "#14b8a6", peopleCategory: "Billionaires" },
  { name: "Mukesh Ambani", netWorth: 100_000_000_000, origin: "Reliance Industries", color: "#0ea5e9", peopleCategory: "India" },
  { name: "Gautam Adani", netWorth: 82_000_000_000, origin: "Adani Group", color: "#f59e0b", peopleCategory: "India" },
  { name: "Taylor Swift", netWorth: 1_600_000_000, origin: "Music, tours", color: "#ec4899", peopleCategory: "Celebrities" },
  { name: "Rihanna", netWorth: 1_400_000_000, origin: "Fenty Beauty, music", color: "#be123c", peopleCategory: "Celebrities" },
  { name: "Kim Kardashian", netWorth: 1_700_000_000, origin: "Skims, media", color: "#a855f7", peopleCategory: "Celebrities" },
  { name: "Jay-Z", netWorth: 2_500_000_000, origin: "Music, business", color: "#111827", peopleCategory: "Celebrities" },
  { name: "Oprah Winfrey", netWorth: 3_000_000_000, origin: "Media", color: "#7c3aed", peopleCategory: "Celebrities" },
  { name: "Shah Rukh Khan", netWorth: 770_000_000, origin: "Films, Red Chillies", color: "#dc2626", peopleCategory: "Celebrities" },
  { name: "Cristiano Ronaldo", netWorth: 800_000_000, origin: "Football, endorsements", color: "#16a34a", peopleCategory: "Sports Stars" },
  { name: "Lionel Messi", netWorth: 650_000_000, origin: "Football, endorsements", color: "#0ea5e9", peopleCategory: "Sports Stars" },
  { name: "LeBron James", netWorth: 1_200_000_000, origin: "NBA, investments", color: "#facc15", peopleCategory: "Sports Stars" },
  { name: "Tiger Woods", netWorth: 1_300_000_000, origin: "Golf, endorsements", color: "#15803d", peopleCategory: "Sports Stars" },
  { name: "Virat Kohli", netWorth: 125_000_000, origin: "Cricket, brands", color: "#2563eb", peopleCategory: "Sports Stars" },
  { name: "Michael Jordan", netWorth: 3_200_000_000, origin: "NBA, Jordan Brand", color: "#b91c1c", peopleCategory: "Sports Stars" },
  { name: "Donald Trump", netWorth: 6_400_000_000, origin: "Real estate, media", color: "#ef4444", peopleCategory: "Politics" },
  { name: "Vladimir Putin", netWorth: 70_000_000_000, origin: "Reported estimates", color: "#334155", peopleCategory: "Politics" },
  { name: "King Charles III", netWorth: 770_000_000, origin: "Royal estate estimates", color: "#7f1d1d", peopleCategory: "Politics" },
];

const dataSnapshot = "Top billionaires: Forbes Jul 09 2026; celebrity values are estimates";
const peopleCategories: PeopleCategory[] = ["All", "Billionaires", "Celebrities", "Sports Stars", "Politics", "India"];

const categories: Category[] = ["All", "Electronics", "Cars", "Real Estate", "Luxury", "Sports", "Others"];

const items: Item[] = [
  { name: "Apple Watch Ultra 2", price: 799, icon: "⌚", detail: "premium smartwatch", category: "Electronics" },
  { name: "iPhone 16 Pro", price: 999, icon: "▯", detail: "flagship phone", category: "Electronics" },
  { name: "MacBook Pro 16", price: 2_499, icon: "▭", detail: "creator laptop", category: "Electronics" },
  { name: "AirPods Max", price: 549, icon: "◖", detail: "premium headphones", category: "Electronics" },
  { name: "PlayStation 5", price: 499, icon: "▣", detail: "gaming console", category: "Electronics" },
  { name: "Samsung Galaxy S24 Ultra", price: 1_199, icon: "▯", detail: "Android flagship phone", category: "Electronics" },
  { name: "iPad Pro", price: 999, icon: "▭", detail: "pro tablet", category: "Electronics" },
  { name: "Apple Vision Pro", price: 3_499, icon: "◉", detail: "spatial computer", category: "Electronics" },
  { name: "DJI Mini 4 Pro Drone", price: 759, icon: "✣", detail: "creator camera drone", category: "Electronics" },
  { name: "Sony 4K OLED TV", price: 1_800, icon: "▭", detail: "premium home cinema", category: "Electronics" },
  { name: "Canon EOS R6 Camera", price: 2_499, icon: "◍", detail: "pro mirrorless camera", category: "Electronics" },
  { name: "Rolex Daytona", price: 45_000, icon: "◎", detail: "luxury watch", category: "Luxury" },
  { name: "Omega Speedmaster", price: 7_000, icon: "◎", detail: "moonwatch classic", category: "Luxury" },
  { name: "Cartier Love Bracelet", price: 7_350, icon: "○", detail: "famous jewellery", category: "Luxury" },
  { name: "Louis Vuitton Trunk", price: 12_000, icon: "▤", detail: "iconic travel trunk", category: "Luxury" },
  { name: "Gucci Suit", price: 3_500, icon: "▥", detail: "designer formal wear", category: "Luxury" },
  { name: "Chanel Classic Bag", price: 10_200, icon: "▤", detail: "famous luxury bag", category: "Luxury" },
  { name: "Hermes Birkin Bag", price: 30_000, icon: "▤", detail: "luxury handbag", category: "Luxury" },
  { name: "Diamond Ring", price: 15_000, icon: "◇", detail: "high-end jewellery", category: "Luxury" },
  { name: "Michelin Star Dinner", price: 700, icon: "◌", detail: "fine dining night", category: "Luxury" },
  { name: "First Class Flight", price: 12_000, icon: "✈", detail: "long-haul luxury seat", category: "Luxury" },
  { name: "Toyota Fortuner", price: 60_000, icon: "▱", detail: "popular luxury SUV", category: "Cars" },
  { name: "Toyota Camry", price: 28_000, icon: "▱", detail: "reliable sedan", category: "Cars" },
  { name: "Mahindra Thar", price: 20_000, icon: "▧", detail: "famous off-road SUV", category: "Cars" },
  { name: "Hyundai Creta", price: 18_000, icon: "▱", detail: "popular compact SUV", category: "Cars" },
  { name: "BMW 3 Series", price: 45_000, icon: "▱", detail: "sport luxury sedan", category: "Cars" },
  { name: "Range Rover Sport", price: 90_000, icon: "▧", detail: "premium SUV", category: "Cars" },
  { name: "Mercedes G-Wagon", price: 180_000, icon: "▧", detail: "celebrity SUV", category: "Cars" },
  { name: "Porsche 911", price: 115_000, icon: "◈", detail: "legendary sports car", category: "Cars" },
  { name: "Lamborghini Revuelto", price: 608_000, icon: "◈", detail: "hybrid supercar", category: "Cars" },
  { name: "Bugatti Chiron", price: 3_300_000, icon: "⬢", detail: "hypercar", category: "Cars" },
  { name: "Tesla Model S", price: 89_990, icon: "◈", detail: "electric luxury car", category: "Cars" },
  { name: "Cybertruck", price: 79_990, icon: "▰", detail: "futuristic electric truck", category: "Cars" },
  { name: "Burj Khalifa", price: 1_500_000_000, icon: "▥", detail: "world famous tower", category: "Real Estate" },
  { name: "Studio Apartment", price: 150_000, icon: "⌂", detail: "starter city home", category: "Real Estate" },
  { name: "3BHK City Apartment", price: 300_000, icon: "⌂", detail: "family apartment", category: "Real Estate" },
  { name: "Farmhouse Plot", price: 250_000, icon: "▧", detail: "weekend land plot", category: "Real Estate" },
  { name: "Goa Beach Villa", price: 1_200_000, icon: "⌂", detail: "holiday home", category: "Real Estate" },
  { name: "London Luxury Flat", price: 2_500_000, icon: "⌂", detail: "prime city apartment", category: "Real Estate" },
  { name: "New York Penthouse", price: 12_000_000, icon: "▥", detail: "skyline luxury home", category: "Real Estate" },
  { name: "Mumbai Sea-View Flat", price: 6_000_000, icon: "⌂", detail: "ultra luxury home", category: "Real Estate" },
  { name: "Dubai Palm Villa", price: 18_000_000, icon: "⌂", detail: "waterfront villa", category: "Real Estate" },
  { name: "Private Island", price: 25_000_000, icon: "◒", detail: "exclusive island estate", category: "Real Estate" },
  { name: "Private Jet", price: 65_000_000, icon: "✈", detail: "Gulfstream-style jet", category: "Luxury" },
  { name: "Luxury Yacht", price: 300_000_000, icon: "◒", detail: "mega yacht", category: "Luxury" },
  { name: "Cricket World Cup Ticket", price: 500, icon: "●", detail: "premium match seat", category: "Sports" },
  { name: "Football World Cup Ticket", price: 1_200, icon: "●", detail: "major final ticket", category: "Sports" },
  { name: "NBA Courtside Seat", price: 3_000, icon: "◉", detail: "front row experience", category: "Sports" },
  { name: "Signed Messi Jersey", price: 5_000, icon: "▥", detail: "football collectible", category: "Sports" },
  { name: "F1 Monaco GP Pass", price: 8_000, icon: "◈", detail: "premium race weekend", category: "Sports" },
  { name: "Professional Cricket Bat", price: 600, icon: "▰", detail: "match-grade bat", category: "Sports" },
  { name: "Football Club", price: 4_000_000_000, icon: "●", detail: "top European club", category: "Sports" },
  { name: "IPL Team", price: 1_200_000_000, icon: "◆", detail: "elite sports franchise", category: "Sports" },
  { name: "NBA Team", price: 3_500_000_000, icon: "◉", detail: "major sports franchise", category: "Sports" },
  { name: "Starbucks Coffee", price: 6, icon: "◌", detail: "daily cafe drink", category: "Others" },
  { name: "Big Mac Meal", price: 10, icon: "◍", detail: "fast food combo", category: "Others" },
  { name: "Movie Ticket", price: 15, icon: "▣", detail: "cinema seat", category: "Others" },
  { name: "Netflix 1 Year", price: 240, icon: "▭", detail: "streaming subscription", category: "Others" },
  { name: "Bicycle", price: 500, icon: "◎", detail: "good city cycle", category: "Others" },
  { name: "Gaming PC", price: 1_500, icon: "▦", detail: "high FPS setup", category: "Others" },
  { name: "Gold Bar 1kg", price: 75_000, icon: "▰", detail: "investment-grade gold", category: "Others" },
  { name: "College Scholarship", price: 80_000, icon: "▦", detail: "one student full year", category: "Others" },
  { name: "Hospital Bed Setup", price: 20_000, icon: "+", detail: "medical infrastructure", category: "Others" },
  { name: "Village School Building", price: 250_000, icon: "▥", detail: "education infrastructure", category: "Others" },
];

const currencies: Currency[] = [
  { code: "USD", label: "US Dollar", locale: "en-US", rate: 1 },
  { code: "INR", label: "Indian Rupee", locale: "en-IN", rate: 83.5 },
  { code: "EUR", label: "Euro", locale: "de-DE", rate: 0.92 },
  { code: "GBP", label: "British Pound", locale: "en-GB", rate: 0.79 },
  { code: "AED", label: "UAE Dirham", locale: "en-AE", rate: 3.67 },
];

const formatMoney = (value: number, currency: Currency) =>
  new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currency.code,
    maximumFractionDigits: value * currency.rate >= 1_000_000 ? 0 : 2,
  }).format(value * currency.rate);

const compactNumber = (value: number) =>
  new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);

export default function Home() {
  const [selectedPersonName, setSelectedPersonName] = useState(billionaires[0].name);
  const [selectedPeopleCategory, setSelectedPeopleCategory] = useState<PeopleCategory>("All");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedItemName, setSelectedItemName] = useState(items[0].name);
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<Currency["code"]>("USD");
  const [quantity, setQuantity] = useState(1);

  const topFivePeople = useMemo(
    () => [...billionaires].sort((first, second) => second.netWorth - first.netWorth).slice(0, 5),
    [],
  );
  const filteredPeople = useMemo(
    () =>
      billionaires.filter(
        (person) => selectedPeopleCategory === "All" || person.peopleCategory === selectedPeopleCategory,
      ),
    [selectedPeopleCategory],
  );
  const filteredItems = useMemo(
    () => items.filter((item) => selectedCategory === "All" || item.category === selectedCategory),
    [selectedCategory],
  );
  const selectedPerson =
    filteredPeople.find((person) => person.name === selectedPersonName) ?? filteredPeople[0] ?? billionaires[0];
  const selectedItem = filteredItems.find((item) => item.name === selectedItemName) ?? filteredItems[0] ?? items[0];
  const selectedCurrency =
    currencies.find((currency) => currency.code === selectedCurrencyCode) ?? currencies[0];

  const result = useMemo(() => {
    const totalCost = selectedItem.price * quantity;
    const remaining = Math.max(selectedPerson.netWorth - totalCost, 0);
    const percentSpent = Math.min((totalCost / selectedPerson.netWorth) * 100, 100);
    const maxCanBuy = Math.floor(selectedPerson.netWorth / selectedItem.price);

    return { totalCost, remaining, percentSpent, maxCanBuy };
  }, [quantity, selectedItem, selectedPerson]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2ecdc] text-[#1d1a15]">
      <section className="relative isolate px-5 py-6 sm:px-8 lg:px-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(249,115,22,.28),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,.24),transparent_28%),linear-gradient(135deg,#fff7df_0%,#efe1c5_42%,#b7d5cb_100%)]" />
        <div className="money-grid absolute inset-0 -z-10 opacity-35" />
        <div className="orb-drift absolute left-[8%] top-24 -z-10 h-40 w-40 rounded-full bg-[#f97316]/35 blur-2xl" />
        <div className="orb-drift-slow absolute right-[7%] top-32 -z-10 h-52 w-52 rounded-full bg-[#0ea5e9]/30 blur-2xl" />
        <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full border border-[#1d1a15]/10 bg-white/20 blur-2xl" />

        <nav className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] border border-[#1d1a15]/10 bg-white/45 px-5 py-4 shadow-[0_20px_80px_rgba(65,49,23,.12)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1d1a15] font-serif text-xl font-black text-[#fff4d4] shadow-lg">
              E
            </span>
            <div>
              <span className="block font-serif text-2xl font-black tracking-tight">Expensss Master</span>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#7c5b27]">Billionaire buying power</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.16em]">
            <span className="rounded-full bg-[#1d1a15] px-4 py-2 text-[#fff4d4]">Live Calculator</span>
            <span className="rounded-full border border-[#1d1a15]/15 bg-white/60 px-4 py-2 text-[#1d1a15]">Multi Currency</span>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-8 pb-14 pt-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:pt-20">
          <div className="animate-[rise_.8s_ease-out_both]">
            <p className="mb-5 inline-flex rounded-full border border-[#1d1a15]/15 bg-white/45 px-4 py-2 text-sm font-bold text-[#6d4a20] shadow-sm backdrop-blur">
              Billionaire money vs real-world objects
            </p>
            <h1 className="max-w-4xl text-balance font-serif text-5xl font-black leading-[.93] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Billionaire Buyout Calculator
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f4638] sm:text-xl">
              Billionaires, celebrities, sports stars, or political figures, choose an item, increase the quantity, and see how much of their net worth is spent.
            </p>
            <p className="mt-5 inline-flex rounded-full border border-[#1d1a15]/10 bg-[#1d1a15]/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#fff4d4] shadow-lg">
              {dataSnapshot}
            </p>
          </div>

          <div className="tilt-card animate-[floatIn_1s_.12s_ease-out_both] rounded-[2rem] border border-[#1d1a15]/10 bg-[#1d1a15] p-5 text-[#fff6df] shadow-[0_35px_120px_rgba(29,26,21,.34)] sm:p-7 w-full max-w-[90%] mx-auto">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#d8c7a0]">Selected person</p>
                <h2 className="mt-3 font-serif text-4xl font-black">{selectedPerson.name}</h2>
                <p className="mt-2 text-[#cbbf9f]">{selectedPerson.origin}</p>
                <p className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#d8c7a0]">
                  {selectedPerson.peopleCategory}
                </p>
              </div>
              <div className="coin-pop grid h-20 w-20 place-items-center rounded-3xl text-4xl shadow-inner" style={{ backgroundColor: selectedPerson.color }}>
                $ 
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm text-[#d8c7a0]">Estimated net worth</p>
              <p className="shimmer-text mt-2 text-4xl font-black tracking-tight sm:text-5xl">{formatMoney(selectedPerson.netWorth, selectedCurrency)}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d8c7a0]">Updated: Jul 09 2026</p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-[#d8c7a0]">Can buy</p>
                <p className="mt-1 text-2xl font-black break-all">{compactNumber(result.maxCanBuy)}</p>
                <p className="text-[#d8c7a0]">{selectedItem.name}</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-[#d8c7a0]">After purchase</p>
                <p className="mt-1 text-2xl font-black break-all">{formatMoney(result.remaining, selectedCurrency)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.86fr_1.14fr]">
          <div className="space-y-6">
            <div className="glass-card rounded-[2rem] border border-[#1d1a15]/10 bg-white/55 p-5 shadow-[0_22px_70px_rgba(70,50,25,.12)] backdrop-blur sm:p-6">
              <h3 className="font-serif text-3xl font-black">1. Select karo</h3>
              <label className="mt-5 block text-sm font-black uppercase tracking-[0.22em] text-[#7c5b27]" htmlFor="people-category">
                People Category
              </label>
              <select
                className="mt-3 h-16 w-full rounded-2xl border border-[#1d1a15]/15 bg-[#1d1a15] px-4 text-lg font-black text-[#f3e8d6] outline-none transition focus:border-[#1d1a15] focus:ring-4 focus:ring-[#1d1a15]/10"
                id="people-category"
                onChange={(event) => {
                  const nextCategory = event.target.value as PeopleCategory;
                  const nextPeople = billionaires.filter(
                    (person) => nextCategory === "All" || person.peopleCategory === nextCategory,
                  );
                  setSelectedPeopleCategory(nextCategory);
                  setSelectedPersonName(nextPeople[0]?.name ?? billionaires[0].name);
                }}
                value={selectedPeopleCategory}
              >
                {peopleCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <label className="mt-5 block text-sm font-black uppercase tracking-[0.22em] text-[#7c5b27]" htmlFor="billionaire">
                Person
              </label>
              <select
                className="mt-3 h-16 w-full rounded-2xl border border-[#1d1a15]/15 bg-[#1d1a15] px-4 text-lg font-black text-[#f3e8d6] outline-none transition focus:border-[#1d1a15] focus:ring-4 focus:ring-[#1d1a15]/10"
                id="billionaire"
                onChange={(event) => setSelectedPersonName(event.target.value)}
                value={selectedPersonName}
              >
                {filteredPeople.map((person) => (
                  <option key={person.name} value={person.name}>
                    {person.name} - {formatMoney(person.netWorth, selectedCurrency)}
                  </option>
                ))}
              </select>

              <label className="mt-5 block text-sm font-black uppercase tracking-[0.22em] text-[#7c5b27]" htmlFor="currency">
                Currency
              </label>
              <select
                className="mt-3 h-16 w-full rounded-2xl border border-[#1d1a15]/15 bg-[#1d1a15] px-4 text-lg font-black text-[#f3e8d6] outline-none transition focus:border-[#1d1a15] focus:ring-4 focus:ring-[#1d1a15]/10"
                id="currency"
                onChange={(event) => setSelectedCurrencyCode(event.target.value as Currency["code"])}
                value={selectedCurrencyCode}
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.label}
                  </option>
                ))}
              </select>

              <label className="mt-5 block text-sm font-black uppercase tracking-[0.22em] text-[#7c5b27]" htmlFor="item">
                Category
              </label>
              <select
                className="mt-3 h-16 w-full rounded-2xl border border-[#1d1a15]/15 bg-[#1d1a15] px-4 text-lg font-black text-[#f3e8d6] outline-none transition focus:border-[#1d1a15] focus:ring-4 focus:ring-[#1d1a15]/10"
                id="category"
                onChange={(event) => {
                  const nextCategory = event.target.value as Category;
                  const nextItems = items.filter((item) => nextCategory === "All" || item.category === nextCategory);
                  setSelectedCategory(nextCategory);
                  setSelectedItemName(nextItems[0]?.name ?? items[0].name);
                }}
                value={selectedCategory}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <label className="mt-5 block text-sm font-black uppercase tracking-[0.22em] text-[#7c5b27]" htmlFor="item">
                Product
              </label>
              <select
                className="mt-3 h-16 w-full rounded-2xl border border-[#1d1a15]/15 bg-[#1d1a15] px-4 text-lg font-black text-[#f3e8d6] outline-none transition focus:border-[#1d1a15] focus:ring-4 focus:ring-[#1d1a15]/10"
                id="item"
                onChange={(event) => setSelectedItemName(event.target.value)}
                value={selectedItemName}
              >
                {filteredItems.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name} - {formatMoney(item.price, selectedCurrency)}
                  </option>
                ))}
              </select>

              <div className="mt-5 rounded-2xl bg-[#1d1a15] p-4 text-white">
                <p className="text-sm text-[#d8c7a0]">Current choice</p>
                <p className="mt-1 text-xl font-black">{selectedPerson.name}</p>
                <p className="text-sm text-[#d8c7a0]">buying {selectedItem.name} from {selectedItem.category}</p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] border border-[#1d1a15]/10 bg-[#d8efe3] p-5 shadow-[0_22px_70px_rgba(70,50,25,.10)] sm:p-6">
              <h3 className="font-serif text-3xl font-black">2. Quantity set karo</h3>
              <input
                aria-label="Quantity"
                className="mt-5 h-3 w-full accent-[#1d1a15]"
                max={Math.min(result.maxCanBuy, 1000)}
                min={1}
                onChange={(event) => setQuantity(Number(event.target.value))}
                type="range"
                value={Math.min(quantity, Math.min(result.maxCanBuy, 1000))} />
              <input
                className="mt-5 w-full rounded-2xl border border-[#1d1a15]/15 bg-white/70 px-4 py-4 text-2xl font-black outline-none focus:border-[#1d1a15]"
                min={1}
                onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                type="number"
                value={quantity}
              />
            </div>
          </div>

          <div className="glass-card rounded-[2.5rem] border border-[#1d1a15]/10 bg-white/65 p-5 shadow-[0_30px_90px_rgba(70,50,25,.14)] backdrop-blur sm:p-7">
            <h3 className="font-serif text-3xl font-black">3. Result dekho</h3>
            <div className="product-spotlight mt-5 rounded-[2rem] border border-[#1d1a15]/10 bg-[#fff1b8] p-5">
              <span className="coin-pop grid h-16 w-16 place-items-center rounded-2xl bg-[#1d1a15] text-3xl text-[#fff1b8]">
                {selectedItem.icon}
              </span>
              <p className="mt-4 text-3xl font-black">{selectedItem.name}</p>
              <p className="text-[#6a5b47]">{selectedItem.detail}</p>
              <p className="mt-2 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#7c5b27]">
                {selectedItem.category}
              </p>
              <p className="mt-3 text-xl font-black text-[#996a11]">Per item: {formatMoney(selectedItem.price, selectedCurrency)}</p>
              <p className="mt-2 text-sm font-bold text-[#6a5b47]">
                Showing in {selectedCurrency.code}; base prices are estimated in USD.
              </p>
            </div>

            <div className="tilt-card mt-7 rounded-[2rem] bg-[#1d1a15] p-5 text-white sm:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[#d8c7a0]">Total spend</p>
                  <p className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">{formatMoney(result.totalCost, selectedCurrency)}</p>
                </div>
                <div className="rounded-full bg-white px-5 py-3 text-lg font-black text-[#1d1a15]">
                  {result.percentSpent.toFixed(6)}% spent
                </div>
              </div>
              <div className="mt-6 h-5 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] transition-all duration-700"
                  style={{ width: `${Math.max(result.percentSpent, 0.2)}%` }}
                />
              </div>
              <p className="mt-5 text-[#d8c7a0]">
                {selectedPerson.name} can buy about {compactNumber(result.maxCanBuy)} {selectedItem.name}. Your selected cart leaves {formatMoney(result.remaining, selectedCurrency)}.
              </p>
            </div>
          </div>
        </div>
      </section>

<div className="fixed bottom-5 right-5 z-50 rounded-full bg-black/80 backdrop-blur-md border border-[#ffac15]/30 px-4 py-2 shadow-xl">
  <span className="text-xs font-medium text-white">
    ✨ Crafted by{" "}
    <span className="font-bold text-[#ffac15]">
      Fariyad Shiekh
    </span>
  </span>
 </div>
  
{/* SEO CONTENT & FOOTER SECTION */}
<div style={{ marginTop: '50px', padding: '20px', textAlign: 'center', opacity: '0.7', fontSize: '14px' }}>
  
  {/* Yeh tera H1/H2 match karne ke liye hai */}
  <h2>Billionaire Spending Simulator | Spend Celebrity Net Worth</h2>
  
  {/* Yeh text tera word count badhayega aur Meta Description se match karega */}
  <p style={{ maxWidth: '800px', margin: '10px auto', lineHeight: '1.6' }}>
    Play the ultimate billionaire shopping game. Find out what you can buy with the massive net worth of Elon Musk, MrBeast, Jeff Bezos, and other global celebrities. From luxury real estate like the Burj Khalifa to private islands, use our interactive calculator to spend their money in real-time!
  </p>

  {/* Yeh Internal Links error hatane ke liye hai */}
  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', fontWeight: 'bold' }}>
    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</a>
  </div>

{(() => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Billionaire Buyout Calculator",
    "operatingSystem": "All",
    "applicationCategory": "WebApplication",
    "browserRequirements": "Requires HTML5 support",
    "url": "https://expensssmaster.in/",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "abstract": "An interactive celebrity net worth spending simulator that allows users to visualize global billionaire wealth in real-time."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
})()}

</div>

    </main>
  
  );
}
