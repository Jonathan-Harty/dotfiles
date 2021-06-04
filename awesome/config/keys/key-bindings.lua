local awful = require('awful')
local mod_keys = require('config.keys.mod-keys')
local mod_key = mod_keys.mod_key
local alt_key = mod_keys.alt_key
local apps = require('config.apps')

local key_bindings = awful.util.table.join(
  awful.key(
    {mod_key},
    'Return',
    function()
      awful.spawn(apps.terminal)
    end,
    {description = 'open terminal', group = 'launcher'}
  ),
  awful.key(
    {mod_key},
    'p',
    function()
      _G.screen.primary.left_drawer:toggle(false, false)
    end,
    {description = 'show panel', group = 'awesome'}
  ),
  awful.key(
    {mod_key},
    's',
    function()
      _G.screen.primary.left_drawer:toggle(true, false)
    end,
    {description = 'show panel', group = 'awesome'}
  )
)

return key_bindings
