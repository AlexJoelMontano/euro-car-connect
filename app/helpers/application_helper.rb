module ApplicationHelper
  def truncate(text, limit)
    return text unless limit.is_a?(Integer)

    words = text.split
    if words.size > limit
      words[0...limit].join(' ') + '...'
    else
      text
    end
  end
end
