local naughty = require('naughty')
local gears = require('gears')
local beautiful = require('beautiful')
local dpi = beautiful.xresources.apply_dpi
local ruled = require('ruled')
local menubar = require('menubar')


naughty.config.padding = 16
naughty.config.spacing = 8

naughty.config.defaults.ontop         = true
naughty.config.defaults.position      = 'top_right'
naughty.config.defaults.shape         = gears.shape.rounded_rect
naughty.config.defaults.margin        = dpi(10)
naughty.config.defaults.border_width  = 0
naughty.config.defaults.icon_size     = dpi(32)

ruled.notification.connect_signal(
  'request::rules',
  function()
    ruled.notification.append_rule {
      rule = { urgency = 'critical' },
      properties = {
        font = beautiful.font,
        bg = beautiful.colors.red,
        fg = beautiful.colors.fg,
      }
    }

    ruled.notification.append_rule {
      rule = { urgency = 'normal' },
      properties = {
        font = beautiful.font,
        bg = beautiful.colors.bg,
        fg = beautiful.colors.fg,
      }
    }

    ruled.notification.append_rule {
      rule = { urgency = 'low' },
      properties = {
        font = beautiful.font,
        bg = beautiful.colors.bg,
        fg = beautiful.colors.fg,
      }
    }
  end
)

naughty.connect_signal(
  'request::display_error',
  function(message, startup)
    naughty.notification {
      urgency = 'critical',
      title = 'An error has occured' .. (startup and ' during startup' or ''),
      message = message,
      icon = beautiful.icons.awesome_logo
    }
  end
)


naughty.connect_signal(
  'request::icon',
  function(n, context, hints)
    if context ~= 'app_icon' then
      return
    end

    local path = menubar.utils.lookup_icon(hints.app_icon) or menubar.utils.lookup_icon(hints.app_icon:lower())

    if path then
      n.icon = path
    end
  end
)