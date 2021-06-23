local awful = require('awful')
local mod_keys = require('config.keys.mod-keys')
local mod_key = mod_keys.mod_key
local alt_key = mod_keys.alt_key

local drawer_keys = awful.util.table.join(
  awful.key(
    {mod_key},
    'p',
    function()
			local s = awful.screen.focused()
      s.left_drawer:toggle()
    end,
    {description = 'show panel', group = 'awesome'}
  ),
  awful.key(
    {mod_key},
    's',
    function()
			local s = awful.screen.focused()
      s.left_drawer:toggle()
      s.left_drawer:run_appmenu()
    end,
    {description = 'run application launcher', group = 'awesome'}
  ),
	awful.key(
    {mod_key},
    'w',
    function()
			local s = awful.screen.focused()
      s.left_drawer:toggle()
      s.left_drawer:run_app_switcher()
    end,
    {description = 'run application launcher', group = 'awesome'}
  ),
	awful.key(
    {alt_key},
    'Tab',
    function()
			local s = awful.screen.focused()
      s.left_drawer:toggle()
      s.left_drawer:run_window_switcher()
    end,
    {description = 'run application launcher', group = 'awesome'}
  ),
	awful.key(
    {mod_key},
    'Escape',
    function()
			local s = awful.screen.focused()
      s.left_drawer:close()
    end,
    {description = 'close window switcher menu', group = 'client'}
  )
)

return drawer_keys