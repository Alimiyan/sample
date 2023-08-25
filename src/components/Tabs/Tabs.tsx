import Badge from "../Badge/Badge";

interface Tab {
    id: number;
    label: string;
}

interface TabsProps {
    activeTab: number;
    setActiveTab: (val: number) => void;
}

const tabs: Tab[] = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Open / In Progress' },
    { id: 3, label: 'Resolved' },
];

function Tabs({ activeTab, setActiveTab }: TabsProps) {
    return (
        <div className="tabs pb-7 px-8">
            {tabs.map((tab) => (
                <span
                    key={tab.id}
                    className={`tab tab-lifted text-l font-bold ${activeTab === tab.id ? 'tab-active ' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                    {tab.id === 1 && <Badge bgColor="bg-orange-400 ml-3">+99</Badge>}
                </span>
            ))}
        </div>
    );
}

export default Tabs;
