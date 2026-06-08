window.registerExam({
  "id": "exam_10",
  "title": "Đề luyện tập 10 - RISC-V, Cache và Pipeline",
  "description": "Đề luyện tập 10. Mỗi câu 10 điểm.",
  "questions": [
    {
      "id": "q1",
      "type": "access_table",
      "points": 10,
      "title": "Fully associative cache với true LRU",
      "prompt": "Assume the main memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>fully associative cache</b> with <b>2-word blocks</b> and a total size of <b>10 words</b>. Assume one word is <b>32 bits</b>.<br><br>For the sequence below, use true LRU. For each reference, identify binary address, tag, and hit/miss.<br><br>Sequence of word addresses:<br><code>0x0c, 0x1d, 0x2e, 0x3f, 0x0d, 0x4c, 0x1c, 0x5e, 0x2f, 0x6f, 0x4d, 0x7c, 0x5f, 0x0c</code>",
      "columns": [
        "Word Address in Hex",
        "Word Address in Binary",
        "Tag in Binary",
        "Hit or Miss"
      ],
      "rows": [
        {
          "addr": "0x0c",
          "cells": [
            {
              "id": "q1_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001100"
            },
            {
              "id": "q1_0_tag",
              "label": "Tag in binary",
              "answers": [
                "0000110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000110"
            },
            {
              "id": "q1_0_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x1d",
          "cells": [
            {
              "id": "q1_1_bin",
              "label": "Word address in binary",
              "answers": [
                "00011101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00011101"
            },
            {
              "id": "q1_1_tag",
              "label": "Tag in binary",
              "answers": [
                "0001110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001110"
            },
            {
              "id": "q1_1_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x2e",
          "cells": [
            {
              "id": "q1_2_bin",
              "label": "Word address in binary",
              "answers": [
                "00101110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00101110"
            },
            {
              "id": "q1_2_tag",
              "label": "Tag in binary",
              "answers": [
                "0010111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010111"
            },
            {
              "id": "q1_2_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x3f",
          "cells": [
            {
              "id": "q1_3_bin",
              "label": "Word address in binary",
              "answers": [
                "00111111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00111111"
            },
            {
              "id": "q1_3_tag",
              "label": "Tag in binary",
              "answers": [
                "0011111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0011111"
            },
            {
              "id": "q1_3_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x0d",
          "cells": [
            {
              "id": "q1_4_bin",
              "label": "Word address in binary",
              "answers": [
                "00001101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001101"
            },
            {
              "id": "q1_4_tag",
              "label": "Tag in binary",
              "answers": [
                "0000110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000110"
            },
            {
              "id": "q1_4_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x4c",
          "cells": [
            {
              "id": "q1_5_bin",
              "label": "Word address in binary",
              "answers": [
                "01001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01001100"
            },
            {
              "id": "q1_5_tag",
              "label": "Tag in binary",
              "answers": [
                "0100110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100110"
            },
            {
              "id": "q1_5_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x1c",
          "cells": [
            {
              "id": "q1_6_bin",
              "label": "Word address in binary",
              "answers": [
                "00011100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00011100"
            },
            {
              "id": "q1_6_tag",
              "label": "Tag in binary",
              "answers": [
                "0001110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001110"
            },
            {
              "id": "q1_6_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x5e",
          "cells": [
            {
              "id": "q1_7_bin",
              "label": "Word address in binary",
              "answers": [
                "01011110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01011110"
            },
            {
              "id": "q1_7_tag",
              "label": "Tag in binary",
              "answers": [
                "0101111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101111"
            },
            {
              "id": "q1_7_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x2f",
          "cells": [
            {
              "id": "q1_8_bin",
              "label": "Word address in binary",
              "answers": [
                "00101111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00101111"
            },
            {
              "id": "q1_8_tag",
              "label": "Tag in binary",
              "answers": [
                "0010111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010111"
            },
            {
              "id": "q1_8_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x6f",
          "cells": [
            {
              "id": "q1_9_bin",
              "label": "Word address in binary",
              "answers": [
                "01101111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01101111"
            },
            {
              "id": "q1_9_tag",
              "label": "Tag in binary",
              "answers": [
                "0110111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0110111"
            },
            {
              "id": "q1_9_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x4d",
          "cells": [
            {
              "id": "q1_10_bin",
              "label": "Word address in binary",
              "answers": [
                "01001101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01001101"
            },
            {
              "id": "q1_10_tag",
              "label": "Tag in binary",
              "answers": [
                "0100110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100110"
            },
            {
              "id": "q1_10_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x7c",
          "cells": [
            {
              "id": "q1_11_bin",
              "label": "Word address in binary",
              "answers": [
                "01111100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01111100"
            },
            {
              "id": "q1_11_tag",
              "label": "Tag in binary",
              "answers": [
                "0111110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0111110"
            },
            {
              "id": "q1_11_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x5f",
          "cells": [
            {
              "id": "q1_12_bin",
              "label": "Word address in binary",
              "answers": [
                "01011111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01011111"
            },
            {
              "id": "q1_12_tag",
              "label": "Tag in binary",
              "answers": [
                "0101111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101111"
            },
            {
              "id": "q1_12_hm",
              "label": "Hit/Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x0c",
          "cells": [
            {
              "id": "q1_13_bin",
              "label": "Word address in binary",
              "answers": [
                "00001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001100"
            },
            {
              "id": "q1_13_tag",
              "label": "Tag in binary",
              "answers": [
                "0000110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000110"
            },
            {
              "id": "q1_13_hm",
              "label": "Hit/Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "symbol",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q1_full",
          "label": "After these accesses, is the cache full?",
          "answers": [
            "yes",
            "y",
            "có",
            "co"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "yes"
        },
        {
          "id": "q1_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "5"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5"
        }
      ],
      "solution": "2-word blocks => offset = 1 bit(s) and tag = upper 7 bits. Hit/Miss sequence: M, M, M, M, H, M, H, M, M, M, H, M, H, M. Cache full: yes. Replacements: 5."
    },
    {
      "id": "q2",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 8-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ <b>8-Way Set Associative Cache</b><br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>32 bytes</b><br>■ Cache size is <b>64 KB</b><br>■ Memory is byte addressing with <b>32-bit addresses</b>.<br><br>Fill in the following values.",
      "fields": [
        {
          "id": "q2_index",
          "label": "Set index",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q2_offset",
          "label": "Block offset",
          "answers": [
            "5"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "5"
        },
        {
          "id": "q2_tag",
          "label": "Tag size for a block",
          "answers": [
            "19"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "19"
        },
        {
          "id": "q2_blocks",
          "label": "Number of blocks",
          "answers": [
            "2048"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "2048"
        },
        {
          "id": "q2_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "567296"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "567296"
        }
      ],
      "solution": "Blocks = 64KB/32B = 2048. Sets = 2048/8 = 256, so index = 8 bits. Offset = log2(32) = 5 bits. Tag = 32 - 8 - 5 = 19 bits. Total = 2048 × (32×8 + 19 tag + 1 valid + 1 dirty) = 567296 bits."
    },
    {
      "id": "q3",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: add",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>add x29, x17, x6</code><br>at address <b>12224</b>. Suppose register xi = <b>18i</b> for i=1,...,31. Suppose memory[M] = <b>M + 530</b>.",
      "fields": [
        {
          "id": "q3_RegWrite",
          "label": "RegWrite",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q3_ALUSrc",
          "label": "ALUSrc",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_MemWrite",
          "label": "MemWrite",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_MemtoReg",
          "label": "MemtoReg",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_MemRead",
          "label": "MemRead",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_Branch",
          "label": "Branch",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_ALUOp",
          "label": "ALUOp",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q3_O",
          "label": "O",
          "answers": [
            "0010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0010"
        },
        {
          "id": "q3_Zero",
          "label": "Zero",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_A",
          "label": "A",
          "answers": [
            "12224"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "12224"
        },
        {
          "id": "q3_B",
          "label": "B",
          "answers": [
            "0x00688EB3"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x00688EB3"
        },
        {
          "id": "q3_C",
          "label": "C",
          "answers": [
            "10001"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10001"
        },
        {
          "id": "q3_D",
          "label": "D",
          "answers": [
            "00110"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00110"
        },
        {
          "id": "q3_E",
          "label": "E",
          "answers": [
            "11101"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "11101"
        },
        {
          "id": "q3_F",
          "label": "F",
          "answers": [
            "0110011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0110011"
        },
        {
          "id": "q3_G",
          "label": "G",
          "answers": [
            "0"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q3_H",
          "label": "H",
          "answers": [
            "12228"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "12228"
        },
        {
          "id": "q3_I",
          "label": "I",
          "answers": [
            "306"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "306"
        },
        {
          "id": "q3_J",
          "label": "J",
          "answers": [
            "108"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "108"
        },
        {
          "id": "q3_K",
          "label": "K",
          "answers": [
            "414"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "414"
        },
        {
          "id": "q3_L",
          "label": "L",
          "answers": [
            "108"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "108"
        },
        {
          "id": "q3_M",
          "label": "M",
          "answers": [
            "?"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "?"
        },
        {
          "id": "q3_N",
          "label": "N",
          "answers": [
            "414"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "414"
        },
        {
          "id": "q3_P",
          "label": "P",
          "answers": [
            "12224"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "12224"
        },
        {
          "id": "q3_Q",
          "label": "Q",
          "answers": [
            "12228"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "12228"
        },
        {
          "id": "q3_R",
          "label": "R",
          "answers": [
            "12224"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "12224"
        }
      ],
      "solution": "x17 = 306 and x6 = 108. K = 414. Encoding = 0x00688EB3."
    },
    {
      "id": "q4",
      "type": "access_table",
      "points": 10,
      "title": "3-way set associative cache, điền Way theo thứ tự đưa vào",
      "prompt": "Assume the memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>3-way set associative cache</b> with <b>2-word blocks</b> and a total size of <b>48 words</b>. Assume 1 word = <b>64 bits</b>.<br><br>First, fill in the cache parameters. Then use true LRU. For each reference, identify binary address, tag, set index, offset, hit/miss, and the tags in each way after the reference has been handled.<br><br><b>Lưu ý:</b> Nếu một Way có nhiều dòng như T(001)=0000, T(010)=1011, mỗi dòng sẽ là một ô nhập riêng. Các dòng trong Way giữ theo <b>thứ tự block được đưa vào way</b>, không sort theo set index.<br><br>Sequence of word addresses:<br><code>0x16, 0xb0, 0x41, 0x17, 0xb8, 0x78, 0xb9, 0x30, 0x70, 0xf0, 0x79, 0x42, 0x31, 0xd0</code>",
      "fields_intro": [
        {
          "id": "q4_cache_blocks",
          "label": "Number of blocks in the cache",
          "answers": [
            "24"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "24"
        },
        {
          "id": "q4_sets",
          "label": "Number of sets in the cache",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "sets",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q4_mem_blocks",
          "label": "Number of blocks in the memory",
          "answers": [
            "128"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "128"
        },
        {
          "id": "q4_tag_bits",
          "label": "Number of tag bits in each block",
          "answers": [
            "4"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "4"
        },
        {
          "id": "q4_total_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "3192"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "3192"
        }
      ],
      "columns": [
        "Word Address in Hex",
        "Word Address in Binary",
        "Tag in Binary",
        "Set Index in Binary",
        "Offset in Binary",
        "Hit or Miss",
        "Way 0",
        "Way 1",
        "Way 2"
      ],
      "rows": [
        {
          "addr": "0x16",
          "cells": [
            {
              "id": "q4_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00010110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010110"
            },
            {
              "id": "q4_0_tag",
              "label": "Tag in binary",
              "answers": [
                "0001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001"
            },
            {
              "id": "q4_0_idx",
              "label": "Set index in binary",
              "answers": [
                "011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "011"
            },
            {
              "id": "q4_0_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_0_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r0_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0xb0",
          "cells": [
            {
              "id": "q4_1_bin",
              "label": "Word address in binary",
              "answers": [
                "10110000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10110000"
            },
            {
              "id": "q4_1_tag",
              "label": "Tag in binary",
              "answers": [
                "1011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1011"
            },
            {
              "id": "q4_1_idx",
              "label": "Set index in binary",
              "answers": [
                "000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "000"
            },
            {
              "id": "q4_1_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_1_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r1_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r1_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1011"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x41",
          "cells": [
            {
              "id": "q4_2_bin",
              "label": "Word address in binary",
              "answers": [
                "01000001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000001"
            },
            {
              "id": "q4_2_tag",
              "label": "Tag in binary",
              "answers": [
                "0100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100"
            },
            {
              "id": "q4_2_idx",
              "label": "Set index in binary",
              "answers": [
                "000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "000"
            },
            {
              "id": "q4_2_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q4_2_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r2_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r2_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1011"
              }
            ],
            [
              {
                "id": "q4_r2_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0100"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x17",
          "cells": [
            {
              "id": "q4_3_bin",
              "label": "Word address in binary",
              "answers": [
                "00010111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010111"
            },
            {
              "id": "q4_3_tag",
              "label": "Tag in binary",
              "answers": [
                "0001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0001"
            },
            {
              "id": "q4_3_idx",
              "label": "Set index in binary",
              "answers": [
                "011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "011"
            },
            {
              "id": "q4_3_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q4_3_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q4_r3_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r3_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1011"
              }
            ],
            [
              {
                "id": "q4_r3_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0100"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xb8",
          "cells": [
            {
              "id": "q4_4_bin",
              "label": "Word address in binary",
              "answers": [
                "10111000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10111000"
            },
            {
              "id": "q4_4_tag",
              "label": "Tag in binary",
              "answers": [
                "1011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1011"
            },
            {
              "id": "q4_4_idx",
              "label": "Set index in binary",
              "answers": [
                "100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "100"
            },
            {
              "id": "q4_4_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_4_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r4_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r4_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1011"
              },
              {
                "id": "q4_r4_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              }
            ],
            [
              {
                "id": "q4_r4_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0100"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x78",
          "cells": [
            {
              "id": "q4_5_bin",
              "label": "Word address in binary",
              "answers": [
                "01111000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01111000"
            },
            {
              "id": "q4_5_tag",
              "label": "Tag in binary",
              "answers": [
                "0111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0111"
            },
            {
              "id": "q4_5_idx",
              "label": "Set index in binary",
              "answers": [
                "100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "100"
            },
            {
              "id": "q4_5_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_5_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r5_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r5_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1011"
              },
              {
                "id": "q4_r5_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              }
            ],
            [
              {
                "id": "q4_r5_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0100"
              },
              {
                "id": "q4_r5_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xb9",
          "cells": [
            {
              "id": "q4_6_bin",
              "label": "Word address in binary",
              "answers": [
                "10111001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10111001"
            },
            {
              "id": "q4_6_tag",
              "label": "Tag in binary",
              "answers": [
                "1011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1011"
            },
            {
              "id": "q4_6_idx",
              "label": "Set index in binary",
              "answers": [
                "100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "100"
            },
            {
              "id": "q4_6_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q4_6_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q4_r6_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r6_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1011"
              },
              {
                "id": "q4_r6_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              }
            ],
            [
              {
                "id": "q4_r6_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0100"
              },
              {
                "id": "q4_r6_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x30",
          "cells": [
            {
              "id": "q4_7_bin",
              "label": "Word address in binary",
              "answers": [
                "00110000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110000"
            },
            {
              "id": "q4_7_tag",
              "label": "Tag in binary",
              "answers": [
                "0011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0011"
            },
            {
              "id": "q4_7_idx",
              "label": "Set index in binary",
              "answers": [
                "000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "000"
            },
            {
              "id": "q4_7_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_7_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r7_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r7_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1011"
              },
              {
                "id": "q4_r7_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              }
            ],
            [
              {
                "id": "q4_r7_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0100"
              },
              {
                "id": "q4_r7_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            [
              {
                "id": "q4_r7_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(000)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0011"
              }
            ]
          ]
        },
        {
          "addr": "0x70",
          "cells": [
            {
              "id": "q4_8_bin",
              "label": "Word address in binary",
              "answers": [
                "01110000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01110000"
            },
            {
              "id": "q4_8_tag",
              "label": "Tag in binary",
              "answers": [
                "0111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0111"
            },
            {
              "id": "q4_8_idx",
              "label": "Set index in binary",
              "answers": [
                "000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "000"
            },
            {
              "id": "q4_8_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_8_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r8_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r8_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0111"
              },
              {
                "id": "q4_r8_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              }
            ],
            [
              {
                "id": "q4_r8_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0100"
              },
              {
                "id": "q4_r8_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            [
              {
                "id": "q4_r8_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(000)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0011"
              }
            ]
          ]
        },
        {
          "addr": "0xf0",
          "cells": [
            {
              "id": "q4_9_bin",
              "label": "Word address in binary",
              "answers": [
                "11110000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11110000"
            },
            {
              "id": "q4_9_tag",
              "label": "Tag in binary",
              "answers": [
                "1111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1111"
            },
            {
              "id": "q4_9_idx",
              "label": "Set index in binary",
              "answers": [
                "000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "000"
            },
            {
              "id": "q4_9_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_9_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r9_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r9_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0111"
              },
              {
                "id": "q4_r9_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              }
            ],
            [
              {
                "id": "q4_r9_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1111"
              },
              {
                "id": "q4_r9_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            [
              {
                "id": "q4_r9_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(000)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0011"
              }
            ]
          ]
        },
        {
          "addr": "0x79",
          "cells": [
            {
              "id": "q4_10_bin",
              "label": "Word address in binary",
              "answers": [
                "01111001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01111001"
            },
            {
              "id": "q4_10_tag",
              "label": "Tag in binary",
              "answers": [
                "0111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0111"
            },
            {
              "id": "q4_10_idx",
              "label": "Set index in binary",
              "answers": [
                "100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "100"
            },
            {
              "id": "q4_10_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q4_10_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q4_r10_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r10_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0111"
              },
              {
                "id": "q4_r10_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              }
            ],
            [
              {
                "id": "q4_r10_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1111"
              },
              {
                "id": "q4_r10_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            [
              {
                "id": "q4_r10_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(000)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0011"
              }
            ]
          ]
        },
        {
          "addr": "0x42",
          "cells": [
            {
              "id": "q4_11_bin",
              "label": "Word address in binary",
              "answers": [
                "01000010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000010"
            },
            {
              "id": "q4_11_tag",
              "label": "Tag in binary",
              "answers": [
                "0100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100"
            },
            {
              "id": "q4_11_idx",
              "label": "Set index in binary",
              "answers": [
                "001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "001"
            },
            {
              "id": "q4_11_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_11_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r11_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r11_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0111"
              },
              {
                "id": "q4_r11_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              },
              {
                "id": "q4_r11_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(001)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0100"
              }
            ],
            [
              {
                "id": "q4_r11_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1111"
              },
              {
                "id": "q4_r11_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            [
              {
                "id": "q4_r11_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(000)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0011"
              }
            ]
          ]
        },
        {
          "addr": "0x31",
          "cells": [
            {
              "id": "q4_12_bin",
              "label": "Word address in binary",
              "answers": [
                "00110001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110001"
            },
            {
              "id": "q4_12_tag",
              "label": "Tag in binary",
              "answers": [
                "0011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0011"
            },
            {
              "id": "q4_12_idx",
              "label": "Set index in binary",
              "answers": [
                "000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "000"
            },
            {
              "id": "q4_12_off",
              "label": "Offset in binary",
              "answers": [
                "1"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1"
            },
            {
              "id": "q4_12_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "h",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q4_r12_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r12_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0111"
              },
              {
                "id": "q4_r12_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              },
              {
                "id": "q4_r12_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(001)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0100"
              }
            ],
            [
              {
                "id": "q4_r12_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1111"
              },
              {
                "id": "q4_r12_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            [
              {
                "id": "q4_r12_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(000)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0011"
              }
            ]
          ]
        },
        {
          "addr": "0xd0",
          "cells": [
            {
              "id": "q4_13_bin",
              "label": "Word address in binary",
              "answers": [
                "11010000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11010000"
            },
            {
              "id": "q4_13_tag",
              "label": "Tag in binary",
              "answers": [
                "1101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1101"
            },
            {
              "id": "q4_13_idx",
              "label": "Set index in binary",
              "answers": [
                "000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "000"
            },
            {
              "id": "q4_13_off",
              "label": "Offset in binary",
              "answers": [
                "0"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0"
            },
            {
              "id": "q4_13_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "m",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q4_r13_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(011)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=0001"
              },
              {
                "id": "q4_r13_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(000)=1101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1101"
              },
              {
                "id": "q4_r13_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(100)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=1011"
              },
              {
                "id": "q4_r13_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(001)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0100"
              }
            ],
            [
              {
                "id": "q4_r13_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(000)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=1111"
              },
              {
                "id": "q4_r13_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(100)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0111"
              }
            ],
            [
              {
                "id": "q4_r13_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(000)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(000)=0011"
              }
            ]
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q4_full",
          "label": "After these accesses, is the cache full?",
          "answers": [
            "no",
            "n",
            "không",
            "khong"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "no"
        },
        {
          "id": "q4_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "3"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "3"
        }
      ],
      "solution": "Block offset = 1 bit, set index = 3 bits, tag = 4 bits. Hit/Miss sequence: M, M, M, H, M, M, H, M, M, M, H, M, H, M. Cache full: no. Replacements: 3. Way entries keep physical insertion order, not sorted by set index."
    },
    {
      "id": "q5",
      "type": "pipeline",
      "points": 10,
      "title": "5-stage pipeline with forwarding and hazard detection",
      "image": "pipeline_datapath",
      "prompt": "Assume that the following code sequence is executed on the 5-stage pipelined processor with forwarding and hazard detection units shown below:<br><pre>lw  x5, 0(x1)\nadd x6, x5, x2\nlw  x7, 0(x6)\nor x8, x7, x5\nsw  x8, 4(x6)</pre>For the first seven cycles, specify the values of control signals at A, B, C, D, E, F, and G.",
      "pipe_rows": [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th"
      ],
      "fields": [
        {
          "id": "q5_r0_A",
          "label": "1st - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r0_B",
          "label": "1st - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r0_C",
          "label": "1st - C",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q5_r0_D",
          "label": "1st - D",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q5_r0_E",
          "label": "1st - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r0_F",
          "label": "1st - F",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q5_r0_G",
          "label": "1st - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q5_r1_A",
          "label": "2nd - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r1_B",
          "label": "2nd - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r1_C",
          "label": "2nd - C",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q5_r1_D",
          "label": "2nd - D",
          "answers": [
            "xx"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q5_r1_E",
          "label": "2nd - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r1_F",
          "label": "2nd - F",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q5_r1_G",
          "label": "2nd - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q5_r2_A",
          "label": "3rd - A",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r2_B",
          "label": "3rd - B",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r2_C",
          "label": "3rd - C",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q5_r2_D",
          "label": "3rd - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q5_r2_E",
          "label": "3rd - E",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r2_F",
          "label": "3rd - F",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q5_r2_G",
          "label": "3rd - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q5_r3_A",
          "label": "4th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r3_B",
          "label": "4th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r3_C",
          "label": "4th - C",
          "answers": [
            "xx"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q5_r3_D",
          "label": "4th - D",
          "answers": [
            "xx"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "xx"
        },
        {
          "id": "q5_r3_E",
          "label": "4th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r3_F",
          "label": "4th - F",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r3_G",
          "label": "4th - G",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q5_r4_A",
          "label": "5th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r4_B",
          "label": "5th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r4_C",
          "label": "5th - C",
          "answers": [
            "01"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01"
        },
        {
          "id": "q5_r4_D",
          "label": "5th - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q5_r4_E",
          "label": "5th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r4_F",
          "label": "5th - F",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r4_G",
          "label": "5th - G",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r5_A",
          "label": "6th - A",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r5_B",
          "label": "6th - B",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r5_C",
          "label": "6th - C",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q5_r5_D",
          "label": "6th - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q5_r5_E",
          "label": "6th - E",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r5_F",
          "label": "6th - F",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r5_G",
          "label": "6th - G",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q5_r6_A",
          "label": "7th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r6_B",
          "label": "7th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r6_C",
          "label": "7th - C",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q5_r6_D",
          "label": "7th - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q5_r6_E",
          "label": "7th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r6_F",
          "label": "7th - F",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q5_r6_G",
          "label": "7th - G",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        }
      ],
      "solution": "First seven cycle matrix (A B C D E F G): 1 1 xx xx 1 x x; 1 1 xx xx 1 x x; 0 0 00 00 0 x x; 1 1 00 00 1 1 x; 1 1 01 00 1 0 1; 0 0 10 00 0 1 0; 1 1 00 00 1 1 1 This sequence has two visible load-use stalls in the first seven cycles: lw x5 -> add x6 and lw x7 -> or x8."
    },
    {
      "id": "q6",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: lw",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>lw x26, -92(x20)</code><br>at address <b>13312</b>. Suppose register xi = <b>32i</b> for i=1,...,31. Suppose memory[M] = <b>M + 840</b>.",
      "fields": [
        {
          "id": "q6_RegWrite",
          "label": "RegWrite",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q6_ALUSrc",
          "label": "ALUSrc",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q6_MemWrite",
          "label": "MemWrite",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_MemtoReg",
          "label": "MemtoReg",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q6_MemRead",
          "label": "MemRead",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q6_Branch",
          "label": "Branch",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_ALUOp",
          "label": "ALUOp",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q6_O",
          "label": "O",
          "answers": [
            "0010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0010"
        },
        {
          "id": "q6_Zero",
          "label": "Zero",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_A",
          "label": "A",
          "answers": [
            "13312"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "13312"
        },
        {
          "id": "q6_B",
          "label": "B",
          "answers": [
            "0xFA4A2D03"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0xFA4A2D03"
        },
        {
          "id": "q6_C",
          "label": "C",
          "answers": [
            "10100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10100"
        },
        {
          "id": "q6_D",
          "label": "D",
          "answers": [
            "00100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00100"
        },
        {
          "id": "q6_E",
          "label": "E",
          "answers": [
            "11010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "11010"
        },
        {
          "id": "q6_F",
          "label": "F",
          "answers": [
            "0000011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0000011"
        },
        {
          "id": "q6_G",
          "label": "G",
          "answers": [
            "-184"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-184"
        },
        {
          "id": "q6_H",
          "label": "H",
          "answers": [
            "13316"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "13316"
        },
        {
          "id": "q6_I",
          "label": "I",
          "answers": [
            "640"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "640"
        },
        {
          "id": "q6_J",
          "label": "J",
          "answers": [
            "-92"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-92"
        },
        {
          "id": "q6_K",
          "label": "K",
          "answers": [
            "548"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "548"
        },
        {
          "id": "q6_L",
          "label": "L",
          "answers": [
            "128"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "128"
        },
        {
          "id": "q6_M",
          "label": "M",
          "answers": [
            "1388"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1388"
        },
        {
          "id": "q6_N",
          "label": "N",
          "answers": [
            "1388"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1388"
        },
        {
          "id": "q6_P",
          "label": "P",
          "answers": [
            "13312"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "13312"
        },
        {
          "id": "q6_Q",
          "label": "Q",
          "answers": [
            "13316"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "13316"
        },
        {
          "id": "q6_R",
          "label": "R",
          "answers": [
            "13128"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "13128"
        }
      ],
      "solution": "x20 = 640. Effective address = 548. Memory[548] = 1388. Encoding = 0xFA4A2D03."
    },
    {
      "id": "q7",
      "type": "fields",
      "points": 10,
      "title": "Fully associative cache parameters",
      "prompt": "Assume the main memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>fully associative cache</b> with <b>8-word blocks</b> and a total size of <b>64 words</b>. Assume one word is <b>32 bits</b>.",
      "fields": [
        {
          "id": "q7_blocks_cache",
          "label": "Number of blocks in the cache",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q7_sets",
          "label": "Number of sets in the cache",
          "answers": [
            "1"
          ],
          "type": "decimal",
          "unit": "sets",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q7_blocks_mem",
          "label": "Number of blocks in the memory",
          "answers": [
            "32"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "32"
        },
        {
          "id": "q7_tag",
          "label": "Number of tag bits in each block",
          "answers": [
            "5"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "5"
        },
        {
          "id": "q7_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "2096"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "2096"
        }
      ],
      "solution": "Cache blocks = 64/8 = 8. Fully associative => one set. Memory blocks = 2^8/8 = 32. Offset = log2(8) = 3 bits, so tag = 8 - 3 = 5 bits. Total = 8 × (8×32 + 5 tag + 1 valid) = 2096 bits."
    },
    {
      "id": "q8",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 2-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ <b>2-Way Set Associative Cache</b><br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>256 bytes</b><br>■ Cache size is <b>256 KB</b><br>■ Memory is byte addressing with <b>32-bit addresses</b>.<br><br>Fill in the following values.",
      "fields": [
        {
          "id": "q8_index",
          "label": "Set index",
          "answers": [
            "9"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "9"
        },
        {
          "id": "q8_offset",
          "label": "Block offset",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q8_tag",
          "label": "Tag size for a block",
          "answers": [
            "15"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "15"
        },
        {
          "id": "q8_blocks",
          "label": "Number of blocks",
          "answers": [
            "1024"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "1024"
        },
        {
          "id": "q8_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "2114560"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "2114560"
        }
      ],
      "solution": "Blocks = 256KB/256B = 1024. Sets = 1024/2 = 512, so index = 9 bits. Offset = log2(256) = 8 bits. Tag = 32 - 9 - 8 = 15 bits. Total = 1024 × (256×8 + 15 tag + 1 valid + 1 dirty) = 2114560 bits."
    },
    {
      "id": "q9",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: sw",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>sw x7, 60(x24)</code><br>at address <b>14500</b>. Suppose register xi = <b>38i</b> for i=1,...,31. Suppose memory[M] = <b>M + 760</b>.",
      "fields": [
        {
          "id": "q9_RegWrite",
          "label": "RegWrite",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q9_ALUSrc",
          "label": "ALUSrc",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_MemWrite",
          "label": "MemWrite",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_MemtoReg",
          "label": "MemtoReg",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q9_MemRead",
          "label": "MemRead",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q9_Branch",
          "label": "Branch",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q9_ALUOp",
          "label": "ALUOp",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q9_O",
          "label": "O",
          "answers": [
            "0010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0010"
        },
        {
          "id": "q9_Zero",
          "label": "Zero",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q9_A",
          "label": "A",
          "answers": [
            "14500"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "14500"
        },
        {
          "id": "q9_B",
          "label": "B",
          "answers": [
            "0x027C2E23"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x027C2E23"
        },
        {
          "id": "q9_C",
          "label": "C",
          "answers": [
            "11000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "11000"
        },
        {
          "id": "q9_D",
          "label": "D",
          "answers": [
            "00111"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00111"
        },
        {
          "id": "q9_E",
          "label": "E",
          "answers": [
            "11100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "11100"
        },
        {
          "id": "q9_F",
          "label": "F",
          "answers": [
            "0100011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0100011"
        },
        {
          "id": "q9_G",
          "label": "G",
          "answers": [
            "120"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "120"
        },
        {
          "id": "q9_H",
          "label": "H",
          "answers": [
            "14504"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "14504"
        },
        {
          "id": "q9_I",
          "label": "I",
          "answers": [
            "912"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "912"
        },
        {
          "id": "q9_J",
          "label": "J",
          "answers": [
            "60"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "60"
        },
        {
          "id": "q9_K",
          "label": "K",
          "answers": [
            "972"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "972"
        },
        {
          "id": "q9_L",
          "label": "L",
          "answers": [
            "266"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "266"
        },
        {
          "id": "q9_M",
          "label": "M",
          "answers": [
            "?"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "?"
        },
        {
          "id": "q9_N",
          "label": "N",
          "answers": [
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q9_P",
          "label": "P",
          "answers": [
            "14500"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "14500"
        },
        {
          "id": "q9_Q",
          "label": "Q",
          "answers": [
            "14504"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "14504"
        },
        {
          "id": "q9_R",
          "label": "R",
          "answers": [
            "14620"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "14620"
        }
      ],
      "solution": "x24 = 912 and x7 = 266. Effective address = 972. Store data = 266. Encoding = 0x027C2E23."
    },
    {
      "id": "q10",
      "type": "fields",
      "points": 10,
      "title": "Execution time: single-cycle vs pipeline",
      "prompt": "Consider the following sequence of 32-bit RISC-V instructions:<br><pre>add x9, x1, x2\nlw  x10, 0(x9)\nlw  x11, 4(x9)\nadd x12, x10, x11\nsw  x12, 8(x9)\nor x13, x12, x10</pre>a) Single-cycle processor clock cycle time = <b>1000 ps</b>.<br>b) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, without forwarding or hazard detection units. Insert NOPs to ensure correct execution.<br>c) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, with forwarding/hazard detection units.<br>d) Which case gives the medium performance?",
      "fields": [
        {
          "id": "q10_a",
          "label": "a) Execution time on single-cycle processor",
          "answers": [
            "6000"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "6000"
        },
        {
          "id": "q10_b_nop",
          "label": "b) Number of inserted NOPs",
          "answers": [
            "6"
          ],
          "type": "decimal",
          "unit": "NOPs",
          "hint": "",
          "show": "6"
        },
        {
          "id": "q10_b_cycles",
          "label": "b) Number of cycles after inserting NOPs",
          "answers": [
            "16"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "16"
        },
        {
          "id": "q10_b_time",
          "label": "b) Execution time without forwarding/hazard detection",
          "answers": [
            "4000"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "4000"
        },
        {
          "id": "q10_c_stall",
          "label": "c) Number of stalls/NOPs needed with forwarding/hazard detection",
          "answers": [
            "1"
          ],
          "type": "decimal",
          "unit": "stalls",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q10_c_cycles",
          "label": "c) Number of cycles",
          "answers": [
            "11"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "11"
        },
        {
          "id": "q10_c_time",
          "label": "c) Execution time with forwarding/hazard detection",
          "answers": [
            "2750"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "2750"
        },
        {
          "id": "q10_d",
          "label": "d) Medium performance case",
          "answers": [
            "b",
            "case b",
            "b)",
            "pipeline without forwarding",
            "without forwarding"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "b"
        }
      ],
      "solution": "Single-cycle: 6×1000 = 6000 ps. Without forwarding/hazard detection: 6 NOPs => 12 instructions including NOPs => 16 cycles => 4000 ps. With forwarding/hazard detection: 1 load-use stall(s) => 11 cycles => 2750 ps. The medium performance is case b."
    }
  ]
});
