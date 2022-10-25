import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import HumanDate from '../components/humanDate';

function CleanModuleProfile(profile) {
    const ytEmbedPattern = /<a href="https:\/\/www\.youtube\.com.*\/([^"]*)"[^<]+<\/a>/gm;

    let m;

    while ((m = ytEmbedPattern.exec(profile)) !== null) {
        if (m.index === ytEmbedPattern.lastIndex) {
            ytEmbedPattern.lastIndex++;
        }

        profile = profile.replace(m[0], `<iframe width='560' height='315' src='https://www.youtube.com/embed/${m[1]}' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`);
    }

    return profile;
}

export default function ModuleProfile({ namespace, module }) {
    if (!ExecutionEnvironment.canUseDOM) {
        return <label>Wait...</label>
    }

    if (!module.AuthorProfile) {
        return <label>Loading...</label>
    }

    module.ProfileSource = CleanModuleProfile(module.ProfileSource);

    return (
        <div class="container">
            <section class="hero">
                <div class="media">
                    <div class="media-left">
                        <figure class="">
                            <img src={ `https://pkgs.blishhud.com/metadata/img/module/${namespace}.png` } alt="Module image" width="128" height="128" onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/img/156027x2.png";
                            }} style={{ borderRadius: "6px" }} />
                        </figure>
                    </div>
                    <div class="hero-body">
                        <p class="title">
                            { module.Name }
                        </p>
                        <p class="subtitle">
                        </p>
                    </div>
                </div>
            </section>
            <div class="columns">
                <section class="column is-two-thirds">
                    <div class="box">
                        <nav class="level">
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Downloads</p>
                                    <p class="title">{ module.Downloads.toLocaleString() }</p>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Last Release</p>
                                    <HumanDate classes='title hint--bottom' timestamp={ module.LastRelease } />
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Latest Version</p>
                                    <p class="title">{module.Version}</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    
                    <div class="box external-source" dangerouslySetInnerHTML={{ __html: module.ProfileSource ? module.ProfileSource : "<center><i>No Description</i></center>" }}></div>
                </section>
                
                <section class="column is-one-third">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Module Details
                            </p>
                        </header>
                        <div class="card-content">
                            <table style={{ width: "100%" }}>
                                <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{ module.Name }</td>
                                </tr>
                                <tr>
                                    <td>Downloads</td>
                                    <td>{ module.Downloads.toLocaleString() }</td>
                                </tr>
                                <tr>
                                    <td>Last Update</td>
                                    <td><HumanDate classes="hint--left" timestamp={ module.LastRelease } /></td>
                                </tr>
                                <tr>
                                    <td>Release Notes</td>
                                    <td><a target="_blank" href={ `https://pkgs.blishhud.com/${namespace}.html` }>View Release Notes</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-content">
                            <center>
                                { module.IssueUrl != null && 
                                    <a style={{ marginRight: "1em" }} class="button" target="_blank" href={module.IssueUrl}>Report a Bug</a>
                                }
                                { module.SuggestionsUrl != null &&
                                    <a class="button" target="_blank" href={module.SuggestionsUrl}>Make a Suggestion</a>
                                }
                            </center>
                        </div>
                    </div>
                    <div class="card" style={{ marginTop: "1em" }}>
                        <header class="card-header">
                            <p class="card-header-title">
                                Module Author
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48 is-rounded">
                                        <img src={`https://pkgs.blishhud.com/metadata/img/author/${module.AuthorProfile.Id}.png`} class="is-rounded" alt="Module Author Image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4" style={{ lineHeight: "48px"}}>{module.AuthorProfile.DisplayName}</p>
                                </div>
                            </div>

                            <div class="content">
                                { module.AuthorProfile.KofiProfile != null &&
                                    <div class="field has-addons">
                                        <span class="control">
                                            <a class="button is-static" style={{width: "180px"}}>
                                                <i class="fa fa-heart"></i>&nbsp;&nbsp;Donate on Ko-Fi
                                            </a>
                                        </span>
                                        <span class="control is-expanded">
                                            <a target="_blank" href={`https://ko-fi.com/${module.AuthorProfile.KofiProfile}`} class="button">{module.AuthorProfile.KofiProfile}</a>
                                        </span>
                                    </div>
                                }
                                { module.AuthorProfile.GuildWars2Profile != null &&
                                    <div class="field has-addons">
                                        <span class="control">
                                            <a class="button is-static" style={{width: "180px"}}>
                                                <i class="fa fa-dragon"></i>&nbsp;&nbsp;Guild Wars 2
                                            </a>
                                        </span>
                                        <span class="control is-expanded">
                                            <a target="_blank" class="button">{module.AuthorProfile.GuildWars2Profile}</a>
                                        </span>
                                    </div>
                                }
                                { module.AuthorProfile.GithubProfile != null &&
                                    <div class="field has-addons">
                                        <span class="control">
                                            <a class="button is-static" style={{width: "180px"}}>
                                                <i class="fab fa-github"></i>&nbsp;&nbsp;GitHub Profile
                                            </a>
                                        </span>
                                        <span class="control is-expanded">
                                            <a target="_blank" href={`https://github.com/${module.AuthorProfile.GithubProfile}`} class="button">{module.AuthorProfile.GithubProfile}</a>
                                        </span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}