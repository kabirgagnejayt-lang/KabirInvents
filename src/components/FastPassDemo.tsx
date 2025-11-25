"use client";

import { useEffect } from 'react';

export function FastPassDemo() {
  const css = `
    .demo-section {
        background-color: hsl(var(--card));
        color: hsl(var(--card-foreground));
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
        width: 100%;
        max-width: 500px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .demo-section h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    .demo-section p {
        color: hsl(var(--muted-foreground));
        margin-bottom: 1.5rem;
    }

    /* FastPass Button & Animation Styles */
    @keyframes fastpass-stripe-animation { from { background-position: 0 0; } to { background-position: -40px 0; } }
    @keyframes fastpass-tick-animation { 0% { stroke-dashoffset: 24; } 100% { stroke-dashoffset: 0; } }
    @keyframes fastpass-spin { to { transform: rotate(360deg); } }
    @keyframes fastpass-x-line-1 { 0% { stroke-dashoffset: 17; } 100% { stroke-dashoffset: 0; } }
    @keyframes fastpass-x-line-2 { 0% { stroke-dashoffset: 17; } 100% { stroke-dashoffset: 0; } }

    .fastpass-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
    }
    .fastpass-button-base {
      position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
      width: 100%; min-height: 90px; padding: 16px; color: white;
      border: none; border-radius: 8px; overflow: hidden; transition: all 0.3s ease; text-align: center; cursor: pointer;
      background-image: repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.05) 10px, rgba(255, 255, 255, 0.05) 20px);
      animation: fastpass-stripe-animation 1.5s linear infinite;
    }
    .fastpass-button-base.state-default { background-color: #10B981; }
    .fastpass-button-base.state-default:hover { filter: brightness(1.1); }
    .fastpass-button-base.state-waiting { background-color: #374151; cursor: default; }
    .fastpass-button-base.state-approved { background-color: #10B981; cursor: default;}
    .fastpass-button-base.state-declined { background-color: #EF4444; }
    .fastpass-button-base.state-declined:hover { filter: brightness(1.1); }
    .fastpass-button-base.state-canceled { background-color: #6B7280; }
    .fastpass-button-base.state-canceled:hover { filter: brightness(1.1); }

    .fastpass-content-state { display: none; }
    .fastpass-button-base.state-default .state-content-default,
    .fastpass-button-base.state-waiting .state-content-waiting,
    .fastpass-button-base.state-approved .state-content-approved,
    .fastpass-button-base.state-declined .state-content-declined,
    .fastpass-button-base.state-canceled .state-content-canceled {
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
    }
    
    .fastpass-top-row { display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 600; }
    .fastpass-bottom-row { display: flex; align-items: center; gap: 6px; font-size: 12px; opacity: 0.8; margin-top: 8px; }
    .fastpass-bottom-row > span { font-weight: 600; }
    .fastpass-logo { width: 20px; height: 20px; }
    .fastpass-check { width: 14px; height: 14px; color: white; }
    .fastpass-powered-by { font-size: 12px; color: #9ca3af; text-align: center; }
    .fastpass-powered-by a { color: inherit; text-decoration: none; }
    .fastpass-powered-by a:hover { text-decoration: underline; }

    .fastpass-approved-icon svg { width: 32px; height: 32px; }
    .fastpass-approved-icon .tick { stroke-dasharray: 24; stroke-dashoffset: 24; animation: fastpass-tick-animation 0.5s ease-out forwards; animation-delay: 0.2s;}

    .fastpass-status-icon svg { width: 28px; height: 28px; }
    .fastpass-status-icon .line1 { stroke-dasharray: 17; stroke-dashoffset: 17; animation: fastpass-x-line-1 0.4s ease-out forwards; animation-delay: 0.2s; }
    .fastpass-status-icon .line2 { stroke-dasharray: 17; stroke-dashoffset: 17; animation: fastpass-x-line-2 0.4s ease-out forwards; animation-delay: 0.4s; }

    .fastpass-spinner {
        width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50%; border-top-color: #fff; animation: fastpass-spin 1s ease-in-out infinite; margin: 0 auto;
    }
  `;

  useEffect(() => {
    // This function creates and manages a single FastPass demo button
    function setupFastPassDemo(containerId: string, popupUrl: string, buttonHtml: string) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Prevent re-initialization
        if (container.dataset.initialized === 'true') return;
        container.dataset.initialized = 'true';

        // State for the demo
        let currentState = 'default';
        let popup: Window | null = null;
        let popupChecker: NodeJS.Timeout | null = null;

        // Render the button
        container.innerHTML = buttonHtml;
        const button = container.querySelector('.fastpass-button-base');
        const approvedTextEl = container.querySelector('.approved-text-js') as HTMLElement;

        if (!button) return;

        function setState(newState: string) {
            currentState = newState;
            if (button) {
              button.className = 'fastpass-button-base state-' + newState;
            }
        }

        function handleClick() {
            if (['approved', 'declined', 'canceled'].includes(currentState)) {
                setState('default');
                if (approvedTextEl) {
                    approvedTextEl.textContent = 'Approved!';
                }
                return;
            }

            setState('waiting');
            
            const width = 600, height = 700;
            const left = (window.screen.width / 2) - (width / 2);
            const top = (window.screen.height / 2) - (height / 2);

            popup = window.open(popupUrl, `fastpass-demo-popup-${containerId}`, `width=${width},height=${height},top=${top},left=${left}`);
            
            if (popupChecker) clearInterval(popupChecker);
            popupChecker = setInterval(() => {
                if (popup && popup.closed && currentState === 'waiting') {
                    if (popupChecker) clearInterval(popupChecker);
                    setState('canceled');
                }
            }, 100);
        }

        button.addEventListener('click', handleClick);

        const messageHandler = (event: MessageEvent) => {
            // IMPORTANT: In a real app, you would verify event.origin.
            if (!event.data || !event.data.status) return;

            // Make sure we're responding to the correct popup
            if (event.source !== popup) return;

            const { status, data } = event.data;

            if (status === 'approved' || status === 'declined' || status === 'canceled') {
                setState(status);
                if (status === 'approved' && data && data.name && approvedTextEl) {
                    approvedTextEl.textContent = 'Welcome, ' + data.name.split(' ')[0] + '!';
                }
                if (popup) popup.close();
                if (popupChecker) clearInterval(popupChecker);
            }
        };

        window.addEventListener('message', messageHandler);

        // Cleanup function to remove event listeners
        return () => {
          window.removeEventListener('message', messageHandler);
          if(button) {
            button.removeEventListener('click', handleClick);
          }
          if (popupChecker) {
            clearInterval(popupChecker);
          }
        };
    }
    
    const autofillButtonHtml = `
        <div class="fastpass-container">
            <button class="fastpass-button-base state-default">
                <div class="fastpass-content-state state-content-default">
                    <div class="fastpass-top-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fastpass-logo"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        <span>Continue with FastPass</span>
                    </div>
                    <div class="fastpass-bottom-row">
                        <span>Demo App</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fastpass-check"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>
                    </div>
                </div>
                <div class="fastpass-content-state state-content-waiting"><div class="fastpass-spinner"></div><div style="margin-top: 8px; font-weight: 600;">Waiting for response...</div></div>
                <div class="fastpass-content-state state-content-approved"><div class="fastpass-approved-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"/><path class="tick" d="M7 13l3 3 7-7"/></svg></div><div class="approved-text-js" style="font-weight: 600;">Approved!</div></div>
                <div class="fastpass-content-state state-content-declined"><div class="fastpass-status-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"/><line class="line1" x1="15" y1="9" x2="9" y2="15"/><line class="line2" x1="9" y1="9" x2="15" y2="15"/></svg></div><div style="font-weight: 600;">Request Declined</div><div style="font-size: 12px; opacity: 0.8;">Click to try again</div></div>
                <div class="fastpass-content-state state-content-canceled"><div class="fastpass-status-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"/><line class="line1" x1="15" y1="9" x2="9" y2="15"/><line class="line2" x1="9" y1="9" x2="15" y2="15"/></svg></div><div style="font-weight: 600;">Request Canceled</div><div style="font-size: 12px; opacity: 0.8;">Click to try again</div></div>
            </button>
            <div class="fastpass-powered-by">Powered by <a href="https://fastpass.kabirinvents.com" target="_blank" rel="noopener noreferrer">FastPass</a></div>
        </div>
    `;

    const ssoButtonHtml = `
        <div class="fastpass-container">
            <button class="fastpass-button-base state-default">
                <div class="fastpass-content-state state-content-default">
                    <div class="fastpass-top-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fastpass-logo"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        <span>Continue with FastPass</span>
                    </div>
                    <div class="fastpass-bottom-row">
                        <span>SSO Demo App</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fastpass-check"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>
                    </div>
                </div>
                <div class="fastpass-content-state state-content-waiting"><div class="fastpass-spinner"></div><div style="margin-top: 8px; font-weight: 600;">Waiting for response...</div></div>
                <div class="fastpass-content-state state-content-approved"><div class="fastpass-approved-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"/><path class="tick" d="M7 13l3 3 7-7"/></svg></div><div class="approved-text-js" style="font-weight: 600;">Approved!</div></div>
                <div class="fastpass-content-state state-content-declined"><div class="fastpass-status-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"/><line class="line1" x1="15" y1="9" x2="9" y2="15"/><line class="line2" x1="9" y1="9" x2="15" y2="15"/></svg></div><div style="font-weight: 600;">Request Declined</div><div style="font-size: 12px; opacity: 0.8;">Click to try again</div></div>
                <div class="fastpass-content-state state-content-canceled"><div class="fastpass-status-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"/><line class="line1" x1="15" y1="9" x2="9" y2="15"/><line class="line2" x1="9" y1="9" x2="15" y2="15"/></svg></div><div style="font-weight: 600;">Request Canceled</div><div style="font-size: 12px; opacity: 0.8;">Click to try again</div></div>
            </button>
            <div class="fastpass-powered-by">Powered by <a href="https://fastpass.kabirinvents.com" target="_blank" rel="noopener noreferrer">FastPass</a></div>
        </div>
    `;

    const host = 'https://fastpass.kabirinvents.com';
    const cleanupAutofill = setupFastPassDemo('autofill-demo-container', `${host}/fastpass/autofilldemo`, autofillButtonHtml);
    const cleanupSso = setupFastPassDemo('sso-demo-container', `${host}/fastpass/ssodemo`, ssoButtonHtml);

    return () => {
      if (cleanupAutofill) cleanupAutofill();
      if (cleanupSso) cleanupSso();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="space-y-8">
        <div className="demo-section">
          <h2>Autofill Demo</h2>
          <p>Tired of filling out sign-up forms? Experience the magic of FastPass yourself. Click the button below to see how it works.</p>
          <div id="autofill-demo-container">
          </div>
        </div>

        <div className="demo-section">
          <h2>SSO (Sign-On) Demo</h2>
          <p>For apps that use FastPass as a login provider, we securely manage a unique password for you. Experience the seamless sign-in flow.</p>
          <div id="sso-demo-container">
          </div>
        </div>
      </div>
    </>
  );
}
