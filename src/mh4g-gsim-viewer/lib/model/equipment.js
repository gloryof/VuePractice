var Equipment = function(csvArray) {
    this.index = 0;
    this.name = csvArray[this.index++];
    this.gender = Number(csvArray[this.index++]);
    this.type = Number(csvArray[this.index++]);
    this.rare = Number(csvArray[this.index++]);
    this.slot = Number(csvArray[this.index++]),
    this.timing = {
        village: Number(csvArray[this.index++]),
        rally: Number(csvArray[this.index++])
    };
    this.difense = {
        min: Number(csvArray[this.index++]),
        max: Number(csvArray[this.index++])
    };
    this.registance = {
        fire: Number(csvArray[this.index++]),
        water: Number(csvArray[this.index++]),
        thunder: Number(csvArray[this.index++]),
        ice: Number(csvArray[this.index++]),
        dragon: Number(csvArray[this.index++])
    };
    this.skills = [
        { name: csvArray[this.index++], value: Number(csvArray[this.index++]) || null  },
        { name: csvArray[this.index++], value: Number(csvArray[this.index++]) || null  },
        { name: csvArray[this.index++], value: Number(csvArray[this.index++]) || null  },
        { name: csvArray[this.index++], value: Number(csvArray[this.index++]) || null  },
        { name: csvArray[this.index++], value: Number(csvArray[this.index++]) || null  }
    ];
    this.materials = [
        { name: csvArray[this.index++], count: Number(csvArray[this.index++]) || null },
        { name: csvArray[this.index++], count: Number(csvArray[this.index++]) || null },
        { name: csvArray[this.index++], count: Number(csvArray[this.index++]) || null },
        { name: csvArray[this.index++], count: Number(csvArray[this.index++]) || null },
        { name: csvArray[this.index++], count: Number(csvArray[this.index++]) || null }
    ]
};
