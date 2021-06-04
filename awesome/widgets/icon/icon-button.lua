local wibox = require('wibox')
local dpi = require('beautiful').xresources.apply_dpi
local gears = require('gears')

function Icon(imagebox)
  local margin = 6
  local icon = wibox.widget {
    wibox.widget {
      wibox.widget {
        imagebox,
        top =     dpi(margin),
        right =   dpi(margin),
        bottom =  dpi(margin),
        left =    dpi(margin),
        widget = wibox.container.margin
      },
      shape = gears.shape.circle,
      widget = Container,
    },
    top =     dpi(margin),
    right =   dpi(margin),
    bottom =  dpi(margin),
    left =    dpi(margin),
    widget = wibox.container.margin
  }

  return icon
end

return Icon
