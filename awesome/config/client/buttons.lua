local awful = require('awful')
local mod_key = require('config.keys.mod-keys').mod_key

local client_buttons = awful.util.table.join(
  awful.button(
    {},
    1,
    function(client)
      client:emit_signal('request::activate')
      client:raise()
    end
  ),
  awful.button(
    {mod_key},
    1,
    awful.mouse.client.move
  ),
  awful.button(
    {mod_key},
    3,
    awful.mouse.client.resize
  ),
  awful.button(
    {mod_key},
    4,
    function()
      awful.layout.inc(1)
    end
  ),
  awful.button(
    {mod_key},
    5,
    function()
      awful.layout.inc(-1)
    end
  )
)

return client_buttons