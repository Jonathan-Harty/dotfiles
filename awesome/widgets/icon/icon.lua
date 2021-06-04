local wibox = require('wibox')
local gears = require('gears')

local list_item = { mt = {}}

function list_item:layout(_, width, height)
  local layout = {}

  if self._private.icon then
    table.insert(
      layout,
      wibox.widget.base.place_widget_at(
        self._private.imagebox,
        width/2 - self._private.size/2,
        height/2 - self._private.size/2,
        self._private.size,
        self._private.size
      )
    )
  end

  return layout
end

function list_item:fit(_, width, height)
  local min = math.min(width, height)
  return min, min
end

function list_item:set_icon(icon)
  self._private.icon = icon
  self._private.imagebox.image = icon
end

function list_item:get_icon()
  return self._private.icon
end

function list_item:set_size(size)
  self._private.size = size
  self:emit_signal('widget::layout_changed')
end

function list_item:get_size()
  return self._private.size
end

local function new(icon, size)
  local to_return = wibox.widget.base.make_widget(
    nil,
    nil,
    {
      enable_properties = true
    }
  )

  gears.table.crush(to_return, list_item, true)
  to_return._private.icon = icon
  to_return._private.imagebox = wibox.widget.imagebox(icon)
  to_return._private.size = size

  return to_return
end

function list_item.mt:__call(...)
  return new(...)
end
  

return setmetatable(list_item, list_item.mt)
