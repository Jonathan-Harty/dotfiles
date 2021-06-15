local gears = require('gears')
local dpi = require('beautiful').xresources.apply_dpi
local colors = require('theme.colors')
local icons = require('assets.icons')

local awesome_dir = os.getenv("HOME") .. '/.config/awesome/'


local theme = {}

-- Fonts and Icons
theme.font                    = 'Open Sans Regular 12'
theme.font_bold               = 'Open Sans Bold 12'
theme.icon_theme              = 'Gruvbox-Material-Dark'
theme.icons                   = icons

-- Defined Colors
theme.colors = colors

theme.border_width = dpi(0)
theme.border_focus  = colors.blue
theme.border_normal = colors.transparent

theme.wallpaper   = awesome_dir .. 'wallpaper.png'
theme.useless_gap = dpi(4)

theme.bar_width = dpi(70)
theme.drawer_content_width = dpi(400)

theme.rounded_rect = function(cr, width, height)
  gears.shape.rounded_rect(cr, width, height, dpi(12))
end

theme.bg_systray = colors.bg

theme.taglist_bg_empty = colors.bg
theme.taglist_bg_occupied = {
  type = 'linear',
  from = {
    theme.bar_width,  --x0
    theme.bar_width,  --y0
  },
  to = {
    0,                --x1
    0                 --y1
  },
  stops = {
    {0,     theme.colors.green},
    {0.05,  theme.colors.green},
    {0.05,  theme.colors.bg},
    {1,     theme.colors.bg}
  }
}
-- theme.taglist_bg_occupied = colors.bg_light_3
theme.taglist_bg_urgent = {
  type = 'linear',
  from = {
    0,                --x0
    0                 --y0
  },
  to = {
    theme.bar_width,  --x1
    0                 --y1
  },
  stops = {
    {0,     theme.colors.red},
    {0.05,  theme.colors.red},
    {0.05,  theme.colors.bg},
    {1,     theme.colors.bg}
  }
}

theme.taglist_bg_focus = {
  type = 'linear',
  from = {
    0,                --x0
    0                 --y0
  },
  to = {
    theme.bar_width,  --x1
    0                 --y1
  },
  stops = {
    {0,     theme.colors.blue},
    {0.05,  theme.colors.blue},
    {0.05,  theme.colors.bg},
    {1,     theme.colors.bg}
  }
} 

return theme