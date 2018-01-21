function Sheet(forFile) {
  let number = 1
  while (true) {
    const name = `Untitled Sheet ${number}`
    if (forFile.sheets.items.some(item => item.name == name)) {
      number++
      continue
    }

    return {
      name: name
    }
  }
}

function File() {
  const file = {
    name: "Untitled Sheet",
    sheets: {
      expanded: true,
      items: []
    }
  }

  file.sheets.items.push(Sheet(file))

  return file
}

export default {
  sheet: Sheet,
  file: File
}