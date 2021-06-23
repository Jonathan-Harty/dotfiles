local awful = require('awful')
local mod_keys = require('config.keys.mod-keys')
local mod_key = mod_keys.mod_key
local alt_key = mod_keys.alt_key

local layout_keys = awful.util.table.join(
  awful.key(
    {mod_key},
    'space',
    function()
      awful.layout.inc(1)
    end,
    {description = 'select next', group = 'layout'}
  )
)

return layout_keys