import {Layout, Input} from "antd";
import React from "react";
import {DiscussionList} from "./DiscussionList";

const {Content, Header} = Layout;
const {Search} = Input;

export class DiscussionPage extends React.Component {
    state = {
        filterStr: "",
        discussions: [{
            title: 'Az emberiség hozzájárul a föld klímájának változásához.',
            description: 'Mivel az emberiség nagyon sok üvegház hatású gázt termel az iparral, azért felmerül a lehetősége annak, hogy a folyamatban lévő klímaváltozást az ember a tevékenységével okozza.',
            args: [{title: 'Hozzájárul, mert csak.'}, {
                title: 'Hozzájárul, az ipari tevékenységgel.',
                description: 'Nincs más feladatom, mint vizualizálni a fontos akció-rádiuszt.'
            }],
            cons: [{title: 'NEm járul hozzá, mert ahhoz túl kicsi.'}, {
                title: 'Nem járul hozzá, mert nincs mivel.',
                description: 'A fejlesztői és üzemeltetői teamek hatékony együttműködése érdekében fontos leprogramozni a szekvenciális változókat.'
            }],
        }, {
            title: 'Az emberiség hozzájárul a föld klímájának változásához.',
            description: 'Mivel az emberiség nagyon sok üvegház hatású gázt termel az iparral, azért felmerül a lehetősége annak, hogy a folyamatban lévő klímaváltozást az ember a tevékenységével okozza.',
            args: [{title: 'Hozzájárul, mert csak.', ranking: 0}, {
                title: 'Hozzájárul, az ipari tevékenységgel.',
                description: 'Nincs más feladatom, mint vizualizálni a fontos akció-rádiuszt.',
                ranking: 10
            }],
            cons: [{
                title: 'NEm járul hozzá, mert ahhoz túl kicsi.',
                ranking: 1
            }, {
                title: 'Nem járul hozzá, mert nincs mivel.',
                description: 'A fejlesztői és üzemeltetői teamek hatékony együttműködése érdekében fontos leprogramozni a szekvenciális változókat.',
                ranking: 8
            }],
        }],
    };

    onSearch = (value) => {
        console.log("value", value)
        this.setState({filterStr: value});
    };

    filter = (discussions, filterStr) => {
        console.log(discussions, filterStr);
        if (!discussions || !Array.isArray(discussions)) {
            return [];
        }

        if (!filterStr) {
            return discussions;
        }
        return discussions.filter(row => (row.title && row.title.toLowerCase().includes(filterStr.toLowerCase()))
            || (row.description && row.description.toLowerCase().includes(filterStr.toLowerCase()))
            || (row.args && row.args.map(arg => arg.title + arg.description).join().toLowerCase().includes(filterStr.toLowerCase()))
            || (row.cons && row.cons.map(con => con.title + con.description).join().toLowerCase().includes(filterStr.toLowerCase()))
        );
    };


    render() {
        const {filterStr, discussions} = this.state;
        console.log("filterStr", filterStr)
        const filteredDiscussions = this.filter(discussions, filterStr);
        return (<Layout>
            <Header>
                <Search
                    size="large"
                    placeholder="Keresés..."
                    onSearch={this.onSearch}
                    style={{width: 600}}/>
            </Header>
            <Layout>
                <Content>
                    <DiscussionList
                        discussions={filteredDiscussions}
                    />
                </Content>
            </Layout>
        </Layout>);
    }
}
