import React from 'react';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { createDevTools } from 'redux-devtools';

const DevTools = createDevTools(
	<DockMonitor
		toggleVisibilityKey="ctrl-h"
		changePositionKey="ctrl-q"
		defaultIsVisible={true}
	>
		<LogMonitor theme="tomorrow" />
	</DockMonitor>
);

export default DevTools;
