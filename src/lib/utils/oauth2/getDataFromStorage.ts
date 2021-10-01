const getDataFromStorage = <T>(
  key: string,
  requiredKeys: (keyof T)[]
): T | undefined => {
  const rawData = localStorage.getItem(key);

  if (!rawData) {
    return;
  }

  try {
    const json = JSON.parse(rawData);

    if (!(json && typeof json === 'object' && Object.keys(json).length)) {
      return;
    }

    for (const requiredKey of requiredKeys) {
      if (json[requiredKey] === undefined) {
        return;
      }
    }

    return json;
  } catch (e) {
    // Sends logs to server.
  }
};

export default getDataFromStorage;
