def parse(string):
    special = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    normal = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    value = 0

    while len(string):
        pair = string[0:2]
        if pair in special:
            value += special[pair]
            string = string[2:]
        else:
            value += normal[string[0]]
            string = string[1:]

    return value

    # for i in range(len(string) -1):
    #     pair = string[i:i+2]
    #     if pair in special:
    #         value += special[pair]
    #         string = string[]

    # # "MCMLXXII"  "--" 1972
    #     M 900 L x x I I
    #     1000 + 900 + 50 + 10+ 10 + 1 + 1
    # nums = {
    #     'I': 1,
    #     "II": 2,
    #     'III': 3,
    #     'IV': 4,
    #     'V': 5,
    #     'VI': 6,
    #     'VII': 7,
    #     'VIII': 8,
    #     'IX': 9,
    #     'X': 10,
    #     'XI': 11,
    # }

    # if string in nums:
    #     return nums[string]
