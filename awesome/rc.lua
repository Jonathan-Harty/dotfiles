local awful = require('awful')
require('awful.autofocus')

local beautiful = require('beautiful')
local theme = require('theme')
beautiful.init(theme)
beautiful.theme_assets.recolor_layout(theme, theme.colors.fg)


local apps = require('config.apps')
local run_once = require('utilities.run-once')

local set_wallpaper = require('utilities.wallpaper')

require('layout')
require('config.notifications')
require('utilities.backdrop')
require('config.client')
require('config.tags')

local slider = require('widgets.slider')
slider(beautiful.icons.volume, beautiful.icons.volume_low, beautiful.icons.mute, 60, 0, 'volume_change', 'pamixer --get-volume-human')
slider(beautiful.icons.brightness_high, beautiful.icons.brightness, beautiful.icons.brightness_low, 60, 15, 'brightness_change', 'light -G')

_G.root.keys(require('config.keys.key-bindings'))

awful.screen.connect_for_each_screen(
  function(screen)
    set_wallpaper(screen)
  end
)

for _, app in pairs(apps.autorun) do
  run_once(app)
end

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
    client.border_color = beautiful.border_focus
  end
)
_G.client.connect_signal(
  'unfocus',
  function(client)
    client.border_color = beautiful.border_normal
  end
)