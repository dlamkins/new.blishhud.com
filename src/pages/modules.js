import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ModuleCard from './module/moduleCard';
import ModuleProfile from './module/moduleProfile';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function AllModules(modules) {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout
            title={`Modules`}
            description={`${siteConfig.tagline}`}>
            <Head>
                <meta name="keywords" content="Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay" />
            </Head>
            <div class="module-content">
                <div class="field has-addons" style={{ display: "none" }}>
                    <p class="control">
                        <a class="button is-static">
                            Sort
                        </a>
                    </p>
                    <div class="select is-right">
                        <select>
                            <option>A to Z</option>
                            <option>Z to A</option>
                            <option>Downloads</option>
                            <option>Last Update</option>
                        </select>
                    </div>
                </div>
                <div class="module-cards">
                    <BrowserOnly>{() =>
                        modules && modules.map(module => (
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
            title={`Module`}
            description={`${siteConfig.tagline}`}>
            <Head>
                <meta name="keywords" content="Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay" />
            </Head>
            <BrowserOnly>
                {() => 
                    <div class="module-content">
                        <ModuleProfile namespace={namespace} module={module} />
                    </div>
                }
            </BrowserOnly>
        </Layout>
    );
}

function Modules() {
    if (!ExecutionEnvironment.canUseDOM) {
        return <label>Wait...</label>
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modules, setModules] = useState(null);
    const [module, setModule] = useState(null);

    var urlParams = new URLSearchParams(window.location.search);
    var moduleNamespace = urlParams.get('module');

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
        return (<div class="hero">
            <h1>Loading...</h1>
        </div>)
    } else {
        if (moduleNamespace == null) {
            if (modules != null) {
                return AllModules(modules);
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