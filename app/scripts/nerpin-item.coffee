define [], () ->
  class NerpinItem
    constructor: (@name, attrs) ->
      {@id, @min, @max} = attrs
    values: (value) ->
      return [
        [0x63, (@id >> 7) & 127],
        [0x62, @id        & 127],
        [0x06, Math.round(@valueFor0x06(value))],
        [0x26, Math.round(@valueFor0x26(value))]
      ]
    valuesAt: (scale) ->
      return @values(((Math.abs(@min) + @max) * scale) - Math.abs(@min))
    valueFor0x06: (value) ->
      return 0
    valueFor0x26: (value) ->
      return 0
