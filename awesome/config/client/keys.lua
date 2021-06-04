local awful = require('awful')
require('awful.autofocus')
local mod_key = require('config.keys.mod-keys').mod_key

local keys = awful.util.table.join(
  awful.key(
    {mod_key},
    'f',
    function(client)
      client.fullscreen = not client.fullscreen
      client:raise()
    end,
    {
      description = 'toogle fullscreen',
      group = 'client'
    }
  ),
  awful.key(
    {mod_key},
    'q',
    function(client)
      client:kill()
    end,
    {
      description = 'close',
      group = 'client'
    }
  ),
  awful.key(
		{mod_key},
		'u',
		awful.client.urgent.jumpto,
		{
      description = 'jump to urgent client',
      group = 'client'
    }
	)
)

return keys