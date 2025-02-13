module ApplicationHelper
  def truncate(text, limit)
    return text unless limit.is_a?(Integer)

    if text.length > limit
      truncated_text = text[0, limit] + '...'
    else
      truncated_text = text
    end

    truncated_text.html_safe
  end
end
