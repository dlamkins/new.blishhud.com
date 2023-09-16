import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function ModuleCard({ module }) {
  if (!ExecutionEnvironment.canUseDOM) {
      return <label>Wait...</label>
  }

  return (
      <a class="bhud-module-card" target="_top" href={ `/modules/?module=${module.Namespace}` } >
        <div class="bhud-module-hero">
          <img src={ `https://pkgs.blishhud.com/metadata/img/module/${module.Namespace}.png` } onError={ (e) => {
            e.target.onerror = null;
            e.target.src = "/img/156027x2.png";
          } } alt="Module image" />
        </div>
        <div class="bhud-card-stacked">
          <div class="bhud-card-content">
            <div class="bhud-card-title">
              <div data-hint={ module.AuthorName } class="bhud-avatar hint--top">
                <img src={ module.AuthorAvatar } onError={ (e) => {
                  e.target.onerror = null;
                  e.target.src = "https://assets.gw2dat.com/733268.png";
                }} />
              </div>
              <div class="bhud-module-line">
                <span class="bhud-card-title hint--top" data-hint={ module.Namespace }>{ module.Name }</span>
              </div>
            </div>

            <div class="content">
              { module.Summary }
            </div>
          </div>
        </div>
      </a>
  );
}