local wibox = require('wibox')
local beautiful = require('beautiful')
local dpi = beautiful.xresources.apply_dpi
local calendar = require('widgets.calendar')

local text_clock = wibox.widget.textclock('<span font="Roboto Mono bold 12">%I\n%M</span>\n<span font="Roboto Mono bold 10">%p</span>')
text_clock.forced_height = 58

calendar({position = "bottom_left", fdow = 7, today_color = beautiful.colors.bg}):attach(text_clock)

local clock_widget = wibox.container.margin(text_clock, dpi(13), dpi(13), dpi(4), dpi(6))

return clock_widget