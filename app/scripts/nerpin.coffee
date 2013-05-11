define ['nerpin-item'], (NerpinItem) ->
  class Nerpin
    constructor: (data) ->
      @_items = for name, attrs of data
        new NerpinItem(name, attrs)
    items: () ->
      @_items
