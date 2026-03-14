

export default function NavTabs({ activeTab }: { activeTab: string }) {

    return (
    <div role="tablist" className="tabs tabs-border h-16 w-full bg-zinc-900 text-zinc-400 border-b border-zinc-800 ">
        <a href="/team-display" role="tab" className={`tab text-3xl ${activeTab === 'employee-display' ? 'tab-active' : ''}`}>Employee display</a>
        <a href="/temperature-converter" role="tab" className={`tab text-3xl ${activeTab === 'temperature-converter' ? 'tab-active' : ''}`}>Temperature Converter</a>
      </div>

    )
}