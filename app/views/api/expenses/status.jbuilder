json.update_status do
    json.array! @update_status,
      :id,
      :status,
  end