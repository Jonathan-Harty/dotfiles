local awful = require('awful')
require('awful.autofocus')

local beautiful = require('beautiful')
beautiful.init(require('theme'))

local set_wallpaper = require('utilities.wallpaper')

require('layout')
require('config.notifications')
require('utilities.backdrop')
require('config.client')
require('config.tags')

_G.root.keys(require('config.keys.key-bindings'))

awful.screen.connect_for_each_screen(
  function(screen)
    set_wallpaper(screen)
  end
)

_G.client.connect_signal(
  'manage',
  function(client)
    if not _G.awesome.startup then
      awful.client.setslave(client)
    end

    if _G.awesome.startup and not client.size_hints.user_position and not client.size_hints.program_position then
      awful.placement.no_offscreen(client)
    end
  end
)

_G.client.connect_signal(
  'mouse::enter',
  function(client)
    client:emit_signal('request::activate', 'mouse_enter', {raise = true})
  end
)

_G.client.connect_signal(
  'focus',
  function(client)
    -- client.border_color = beautiful.border_focus
  end
)
_G.client.connect_signal(
  'unfocus',
  function(client)
    -- client.border_color = beautiful.border_normal
  end
)