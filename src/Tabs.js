import React, {use, useState} from 'react';

function  TabInterface() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: 'Tab 1', content: 'Content for Tab 1' },
        { id: 1, label: 'Tab 2', content: 'Content for Tab 2' },
        { id: 2, label: 'Tab 3', content: 'Content for Tab 3' },
    ];

    const handlerTabs = (index) => {
        setActiveTab(index);
    }

    const handlerKeyDown = (event, index) => {
        if (event.key === 'ArrowRight') {
            setActiveTab((prev) => (prev+1)%tabs.length);
        } else if (event.key === 'ArrowLeft') {
            setActiveTab((prev) => (prev-1+tabs.length) % tabs.length);
        }
    };

    return (
        <div>
            <div role="tablist" style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={activeTab === index}
                        tabIndex={activeTab === index ? 0 : -1}
                        onClick={() => handlerTabs(index)}
                        onKeyDown={(e) => handlerKeyDown(e, index)}
                        style={{
                            color: activeTab === index ? 'blue' : 'black',
                            fontWeight: activeTab === index ? 'bold' : 'normal',
                            cursor: 'pointer',
                            border: 'none',
                            background: 'none',
                            fontSize: '16px',
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div role="tabpanel" style={{ border: '1px solid #ccc', padding: '10px' }}>
                {tabs[activeTab].content}
            </div>
        </div>
    )
}

export default TabInterface;