import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

//Ctrl + H toggles DevTools Monitor
const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        defaultIsVisible={false}>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default DevTools;
