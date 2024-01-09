import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ModuleCard from './module/moduleCard';
import ModuleProfile from './module/moduleProfile';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Loading from '@theme/Loading';

/*

    I apologize for my poor state handling in all of this.  React is clearly not something I'm super familiar with.
    Please don't hesitate to recommend improvements.
        — Freesnöw

*/

function AllModules(modules, [sortMethod, setSortMethod]) {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    context.updateSortOrder = (newSortOrder) => setSortMethod(newSortOrder.target.value);
    
    context.doSort = function (modules) {
        switch (sortMethod) {
            case "Downloads":
                return modules.sort((a, b) => b.Downloads - a.Downloads);
            case "A to Z":
                return modules.sort((a, b) => a.Name.localeCompare(b.Name));
            case "Z to A":
                return modules.sort((a, b) => b.Name.localeCompare(a.Name));
            case "Last Update":
                return modules.sort((a, b) => new Date(b.LastUpdate) - new Date(a.LastUpdate));
            default:
                return modules;
        }
    }

    return (
        <Layout
            title={`Modules`}
            description={`${siteConfig.tagline}`}>
            <Head>
                <meta name="keywords" content="Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay" />
            </Head>
            <div className="module-content">
                <div className="field has-addons">
                    <p className="control">
                        <a className="button is-static">
                            Sort
                        </a>
                    </p>
                    <div className="select is-right">
                        <select id="sortOrder" value={context.sortMethod} onChange={context.updateSortOrder}>
                            <option>Downloads</option>
                            <option>A to Z</option>
                            <option>Z to A</option>
                            <option>Last Update</option>
                        </select>
                    </div>
                </div>
                <div className="module-cards">
                    <BrowserOnly>{() =>
                        modules && context.doSort(modules).map(module => (
                                <ModuleCard key={module.Namespace} module={module} />
                            ))
                        }
                    </BrowserOnly>
                </div>
            </div>
        </Layout>
    );
}

function Module(namespace, module) {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout
            title={`${module.Name} Module`}
            description={`${module.Summary}`}>
            <BrowserOnly>
                {() => 
                    <Head>
                        <meta name="keywords" content={`${namespace}, ${module.Name}, Module, Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay`} />
                        <meta name="og:image" content={`https://pkgs.blishhud.com/metadata/img/module/${namespace}.png`} />
                    </Head>
                }
            </BrowserOnly>
            <BrowserOnly>
                {() => 
                    <div className="module-content">
                        <ModuleProfile namespace={namespace} module={module} />
                    </div>
                }
            </BrowserOnly>
        </Layout>
    );
}

function MdlLoading() {
    // Just empty layout is more than fine.
    return (
        <Layout>
                
        </Layout>
    );
}

function Modules() {
    if (!ExecutionEnvironment.canUseDOM) {
        return MdlLoading();
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modules, setModules] = useState(null);
    const [module, setModule] = useState(null);
    const [sortMethod, setSortMethod] = useState("Downloads");

    var urlParams = new URLSearchParams(window.location.search);
    var moduleNamespace = urlParams.get('module');
    var moduleAuthor = urlParams.get('author');

    useEffect(() => {
        if (moduleNamespace == null) {
            // Load all modules
            fetch("https://pkgs.blishhud.com/metadata/all.json")
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setModules(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    })
        } else {
            // Load module profile
            fetch(`https://pkgs.blishhud.com/metadata/${moduleNamespace}.json`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setModule(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    })
        }
    }, [isLoaded]); // uhh this is getting called twice on each page.  Not sure how else to make this smooth between module profiles and the full listing, though.

    if (error) {
        return <label>Error loading: {error}</label>
    } else if (!isLoaded) {
        return MdlLoading();
    } else {
        if (moduleNamespace == null) {
            if (modules != null) {
                if (moduleAuthor == null) {
                    return AllModules(modules, [sortMethod, setSortMethod]);
                } else {
                    return AllModules(modules.filter(function(module) {
                        return !module.AuthorName.localeCompare(moduleAuthor, undefined, { sensitivity: 'base' });
                    }), [sortMethod, setSortMethod]);
                }
            } else {
                setIsLoaded(false);
            }
        } else {
            if (module != null) {
                return Module(moduleNamespace, module);
            } else {
                setIsLoaded(false);
            }
        }
    }
}

export default Modules;