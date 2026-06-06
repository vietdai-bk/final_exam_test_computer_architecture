window.registerExam({
  "id": "exam_05",
  "title": "Đề luyện tập 05 - RISC-V, Cache và Pipeline",
  "description": "Đề số 05 gồm 10 câu mới. Mỗi câu 10 điểm, tổng 100 điểm. Đáp án chỉ hiện sau khi nộp bài.",
  "questions": [
    {
      "id": "q1",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: lw",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>lw x21, -64(x9)</code><br>at address <b>5000</b>. Suppose register xi = <b>40i</b> for i=1,...,31. Suppose memory[M] = <b>M + 900</b>.",
      "fields": [
        {
          "id": "q1_RegWrite",
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
          "id": "q1_ALUSrc",
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
          "id": "q1_MemWrite",
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
          "id": "q1_MemtoReg",
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
          "id": "q1_MemRead",
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
          "id": "q1_Branch",
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
          "id": "q1_ALUOp",
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
          "id": "q1_O",
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
          "id": "q1_Zero",
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
          "id": "q1_A",
          "label": "A",
          "answers": [
            "5000"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5000"
        },
        {
          "id": "q1_B",
          "label": "B",
          "answers": [
            "0xFC04AA83"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0xFC04AA83"
        },
        {
          "id": "q1_C",
          "label": "C",
          "answers": [
            "01001"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01001"
        },
        {
          "id": "q1_D",
          "label": "D",
          "answers": [
            "00000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00000"
        },
        {
          "id": "q1_E",
          "label": "E",
          "answers": [
            "10101"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10101"
        },
        {
          "id": "q1_F",
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
          "id": "q1_G",
          "label": "G",
          "answers": [
            "-128"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-128"
        },
        {
          "id": "q1_H",
          "label": "H",
          "answers": [
            "5004"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5004"
        },
        {
          "id": "q1_I",
          "label": "I",
          "answers": [
            "360"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "360"
        },
        {
          "id": "q1_J",
          "label": "J",
          "answers": [
            "-64"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-64"
        },
        {
          "id": "q1_K",
          "label": "K",
          "answers": [
            "296"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "296"
        },
        {
          "id": "q1_L",
          "label": "L",
          "answers": [
            "0"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q1_M",
          "label": "M",
          "answers": [
            "1196"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1196"
        },
        {
          "id": "q1_N",
          "label": "N",
          "answers": [
            "1196"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1196"
        },
        {
          "id": "q1_P",
          "label": "P",
          "answers": [
            "5000"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5000"
        },
        {
          "id": "q1_Q",
          "label": "Q",
          "answers": [
            "5004"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5004"
        },
        {
          "id": "q1_R",
          "label": "R",
          "answers": [
            "4872"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "4872"
        }
      ],
      "solution": "x9=360. Effective address = 360-64=296. Memory[296]=1196, so x21 receives 1196."
    },
    {
      "id": "q2",
      "type": "access_table",
      "points": 10,
      "title": "Fully associative cache with 1-word blocks",
      "prompt": "Assume the main memory is word addressing with 8-bit addresses and the cache is a fully associative cache with <b>one-word blocks</b> and a total size of <b>8 words</b>. Assume one word is 32 bits.<br><br>Sequence of word addresses:<br><code>0xc, 0x40, 0xd, 0x80, 0xc, 0x41, 0x90, 0xd, 0xa0, 0x40, 0x91, 0xb0</code><br><br>Assume a true LRU replacement policy. For each reference, identify binary word address, tag, and hit/miss.",
      "fields_intro": [
        {
          "id": "q2_cache_blocks",
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
          "id": "q2_sets",
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
          "id": "q2_mem_blocks",
          "label": "Number of blocks in the memory",
          "answers": [
            "256"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "256"
        },
        {
          "id": "q2_tag_bits",
          "label": "Number of tag bits in each block",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q2_total_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "328"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "328"
        }
      ],
      "columns": [
        "Word Address in Hex",
        "Word Address in Binary",
        "Tag in Binary",
        "Hit or Miss"
      ],
      "rows": [
        {
          "addr": "0xc",
          "cells": [
            {
              "id": "q2_0_bin",
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
              "id": "q2_0_tag",
              "label": "Tag in binary",
              "answers": [
                "00001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001100"
            },
            {
              "id": "q2_0_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x40",
          "cells": [
            {
              "id": "q2_1_bin",
              "label": "Word address in binary",
              "answers": [
                "01000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000000"
            },
            {
              "id": "q2_1_tag",
              "label": "Tag in binary",
              "answers": [
                "01000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000000"
            },
            {
              "id": "q2_1_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0xd",
          "cells": [
            {
              "id": "q2_2_bin",
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
              "id": "q2_2_tag",
              "label": "Tag in binary",
              "answers": [
                "00001101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001101"
            },
            {
              "id": "q2_2_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x80",
          "cells": [
            {
              "id": "q2_3_bin",
              "label": "Word address in binary",
              "answers": [
                "10000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10000000"
            },
            {
              "id": "q2_3_tag",
              "label": "Tag in binary",
              "answers": [
                "10000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10000000"
            },
            {
              "id": "q2_3_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0xc",
          "cells": [
            {
              "id": "q2_4_bin",
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
              "id": "q2_4_tag",
              "label": "Tag in binary",
              "answers": [
                "00001100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001100"
            },
            {
              "id": "q2_4_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x41",
          "cells": [
            {
              "id": "q2_5_bin",
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
              "id": "q2_5_tag",
              "label": "Tag in binary",
              "answers": [
                "01000001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000001"
            },
            {
              "id": "q2_5_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x90",
          "cells": [
            {
              "id": "q2_6_bin",
              "label": "Word address in binary",
              "answers": [
                "10010000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10010000"
            },
            {
              "id": "q2_6_tag",
              "label": "Tag in binary",
              "answers": [
                "10010000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10010000"
            },
            {
              "id": "q2_6_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0xd",
          "cells": [
            {
              "id": "q2_7_bin",
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
              "id": "q2_7_tag",
              "label": "Tag in binary",
              "answers": [
                "00001101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001101"
            },
            {
              "id": "q2_7_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0xa0",
          "cells": [
            {
              "id": "q2_8_bin",
              "label": "Word address in binary",
              "answers": [
                "10100000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10100000"
            },
            {
              "id": "q2_8_tag",
              "label": "Tag in binary",
              "answers": [
                "10100000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10100000"
            },
            {
              "id": "q2_8_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x40",
          "cells": [
            {
              "id": "q2_9_bin",
              "label": "Word address in binary",
              "answers": [
                "01000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000000"
            },
            {
              "id": "q2_9_tag",
              "label": "Tag in binary",
              "answers": [
                "01000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000000"
            },
            {
              "id": "q2_9_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            }
          ]
        },
        {
          "addr": "0x91",
          "cells": [
            {
              "id": "q2_10_bin",
              "label": "Word address in binary",
              "answers": [
                "10010001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10010001"
            },
            {
              "id": "q2_10_tag",
              "label": "Tag in binary",
              "answers": [
                "10010001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10010001"
            },
            {
              "id": "q2_10_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0xb0",
          "cells": [
            {
              "id": "q2_11_bin",
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
              "id": "q2_11_tag",
              "label": "Tag in binary",
              "answers": [
                "10110000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10110000"
            },
            {
              "id": "q2_11_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q2_full",
          "label": "After these accesses, is the cache full?",
          "answers": [
            "yes",
            "y"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "yes"
        },
        {
          "id": "q2_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "1"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "1"
        }
      ],
      "solution": "Block offset = 0 bit(s), set index = 0 bit(s), tag = 8 bit(s). Hit/Miss sequence: M, M, M, M, H, M, M, H, M, H, M, M. Cache full: yes. Replacements: 1."
    },
    {
      "id": "q3",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 8-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ 8-Way Set Associative Cache<br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>64 bytes</b><br>■ Cache size is <b>128 KB</b><br>■ Memory is byte addressing with 32-bit addresses",
      "fields": [
        {
          "id": "q3_idx",
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
          "id": "q3_off",
          "label": "Block offset",
          "answers": [
            "6"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "6"
        },
        {
          "id": "q3_tag",
          "label": "Tag size for a block",
          "answers": [
            "18"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "18"
        },
        {
          "id": "q3_blocks",
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
          "id": "q3_total",
          "label": "Total bits required to implement the cache",
          "answers": [
            "1089536"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "1089536"
        }
      ],
      "solution": "Blocks = 128KB/64B = 2048. Sets = 2048/8 = 256, so index = 8 bits. Offset = 6 bits. Tag = 18 bits. Total = 2048×(512+18+1+1)=1089536 bits."
    },
    {
      "id": "q4",
      "type": "fields",
      "points": 10,
      "title": "Execution time: single-cycle vs pipeline",
      "prompt": "Consider the following sequence of 32-bit RISC-V instructions:<br><pre>add x10, x1,  x2\nlw  x11, 0(x10)\nadd x12, x11, x3\nlw  x13, 4(x10)\nsub x14, x13, x12\nsw  x14, 8(x10)</pre>a) Single-cycle processor clock cycle time = <b>1000 ps</b>.<br>b) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, without forwarding or hazard detection units. Insert NOPs to ensure correct execution.<br>c) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, with forwarding/hazard detection units.<br>d) Which case gives the medium performance?",
      "fields": [
        {
          "id": "q4_a",
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
          "id": "q4_b_nop",
          "label": "b) Number of inserted NOPs",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "NOPs",
          "hint": "",
          "show": "8"
        },
        {
          "id": "q4_b_cycles",
          "label": "b) Number of cycles after inserting NOPs",
          "answers": [
            "18"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "18"
        },
        {
          "id": "q4_b_time",
          "label": "b) Execution time without forwarding/hazard detection",
          "answers": [
            "4500"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "4500"
        },
        {
          "id": "q4_c_stall",
          "label": "c) Number of stalls/NOPs needed with forwarding/hazard detection",
          "answers": [
            "2"
          ],
          "type": "decimal",
          "unit": "stalls",
          "hint": "",
          "show": "2"
        },
        {
          "id": "q4_c_cycles",
          "label": "c) Number of cycles",
          "answers": [
            "12"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "12"
        },
        {
          "id": "q4_c_time",
          "label": "c) Execution time with forwarding/hazard detection",
          "answers": [
            "3000"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "3000"
        },
        {
          "id": "q4_d",
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
      "solution": "Single-cycle time = 6000 ps. Without forwarding/hazard detection: 8 NOPs, cycles = 18, time = 4500 ps. With forwarding/hazard detection: 2 stall(s), cycles = 12, time = 3000 ps. Medium performance is case b. "
    },
    {
      "id": "q5",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: sw",
      "image": "single_cycle_datapath",
      "prompt": "Let the processor execute:<br><code>sw x7, 112(x18)</code><br>at address <b>5004</b>. Suppose register xi = <b>40i</b> for i=1,...,31. Suppose memory[M] = <b>M + 900</b>.",
      "fields": [
        {
          "id": "q5_RegWrite",
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
          "id": "q5_ALUSrc",
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
          "id": "q5_MemWrite",
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
          "id": "q5_MemtoReg",
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
          "id": "q5_MemRead",
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
          "id": "q5_Branch",
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
          "id": "q5_ALUOp",
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
          "id": "q5_O",
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
          "id": "q5_Zero",
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
          "id": "q5_A",
          "label": "A",
          "answers": [
            "5004"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5004"
        },
        {
          "id": "q5_B",
          "label": "B",
          "answers": [
            "0x06792823"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x06792823"
        },
        {
          "id": "q5_C",
          "label": "C",
          "answers": [
            "10010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10010"
        },
        {
          "id": "q5_D",
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
          "id": "q5_E",
          "label": "E",
          "answers": [
            "10000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10000"
        },
        {
          "id": "q5_F",
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
          "id": "q5_G",
          "label": "G",
          "answers": [
            "224"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "224"
        },
        {
          "id": "q5_H",
          "label": "H",
          "answers": [
            "5008"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5008"
        },
        {
          "id": "q5_I",
          "label": "I",
          "answers": [
            "720"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "720"
        },
        {
          "id": "q5_J",
          "label": "J",
          "answers": [
            "112"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "112"
        },
        {
          "id": "q5_K",
          "label": "K",
          "answers": [
            "832"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "832"
        },
        {
          "id": "q5_L",
          "label": "L",
          "answers": [
            "280"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "280"
        },
        {
          "id": "q5_M",
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
          "id": "q5_N",
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
          "id": "q5_P",
          "label": "P",
          "answers": [
            "5004"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5004"
        },
        {
          "id": "q5_Q",
          "label": "Q",
          "answers": [
            "5008"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5008"
        },
        {
          "id": "q5_R",
          "label": "R",
          "answers": [
            "5228"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5228"
        }
      ],
      "solution": "x18=720 and x7=280. Effective address = 720+112=832. sw writes 280 to data memory address 832."
    },
    {
      "id": "q6",
      "type": "access_table",
      "points": 10,
      "title": "3-way set associative cache, điền Way theo từng dòng",
      "prompt": "Assume the memory is word addressing with 8-bit addresses and the cache is a <b>3-way set associative cache</b> with <b>2-word blocks</b> and a total size of <b>48 words</b>. Assume 1 word = 64 bits.<br><br>First, fill in the cache parameters. Then use true LRU. For each reference, identify binary address, tag, set index, offset, hit/miss, and the tags in each way after the reference has been handled.<br><br>Lưu ý: Nếu một Way có nhiều dòng như T(001)=0000, T(010)=1011, mỗi dòng sẽ là một ô nhập riêng.<br><br>Sequence of word addresses:<br><code>0xa, 0xa4, 0x3b, 0xb, 0xae, 0x6c, 0xaf, 0x2e, 0x4f, 0xa5, 0xaf, 0xca, 0x3f, 0xde</code>",
      "fields_intro": [
        {
          "id": "q6_cache_blocks",
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
          "id": "q6_sets",
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
          "id": "q6_mem_blocks",
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
          "id": "q6_tag_bits",
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
          "id": "q6_total_bits",
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
          "addr": "0xa",
          "cells": [
            {
              "id": "q6_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00001010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001010"
            },
            {
              "id": "q6_0_tag",
              "label": "Tag in binary",
              "answers": [
                "0000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000"
            },
            {
              "id": "q6_0_idx",
              "label": "Set index in binary",
              "answers": [
                "101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "101"
            },
            {
              "id": "q6_0_off",
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
              "id": "q6_0_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r0_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0xa4",
          "cells": [
            {
              "id": "q6_1_bin",
              "label": "Word address in binary",
              "answers": [
                "10100100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10100100"
            },
            {
              "id": "q6_1_tag",
              "label": "Tag in binary",
              "answers": [
                "1010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1010"
            },
            {
              "id": "q6_1_idx",
              "label": "Set index in binary",
              "answers": [
                "010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "010"
            },
            {
              "id": "q6_1_off",
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
              "id": "q6_1_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r1_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r1_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x3b",
          "cells": [
            {
              "id": "q6_2_bin",
              "label": "Word address in binary",
              "answers": [
                "00111011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00111011"
            },
            {
              "id": "q6_2_tag",
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
              "id": "q6_2_idx",
              "label": "Set index in binary",
              "answers": [
                "101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "101"
            },
            {
              "id": "q6_2_off",
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
              "id": "q6_2_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r2_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r2_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              }
            ],
            [
              {
                "id": "q6_r2_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xb",
          "cells": [
            {
              "id": "q6_3_bin",
              "label": "Word address in binary",
              "answers": [
                "00001011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00001011"
            },
            {
              "id": "q6_3_tag",
              "label": "Tag in binary",
              "answers": [
                "0000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000"
            },
            {
              "id": "q6_3_idx",
              "label": "Set index in binary",
              "answers": [
                "101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "101"
            },
            {
              "id": "q6_3_off",
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
              "id": "q6_3_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q6_r3_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r3_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              }
            ],
            [
              {
                "id": "q6_r3_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xae",
          "cells": [
            {
              "id": "q6_4_bin",
              "label": "Word address in binary",
              "answers": [
                "10101110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10101110"
            },
            {
              "id": "q6_4_tag",
              "label": "Tag in binary",
              "answers": [
                "1010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1010"
            },
            {
              "id": "q6_4_idx",
              "label": "Set index in binary",
              "answers": [
                "111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "111"
            },
            {
              "id": "q6_4_off",
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
              "id": "q6_4_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r4_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r4_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r4_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r4_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x6c",
          "cells": [
            {
              "id": "q6_5_bin",
              "label": "Word address in binary",
              "answers": [
                "01101100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01101100"
            },
            {
              "id": "q6_5_tag",
              "label": "Tag in binary",
              "answers": [
                "0110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0110"
            },
            {
              "id": "q6_5_idx",
              "label": "Set index in binary",
              "answers": [
                "110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "110"
            },
            {
              "id": "q6_5_off",
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
              "id": "q6_5_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r5_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r5_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r5_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r5_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r5_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xaf",
          "cells": [
            {
              "id": "q6_6_bin",
              "label": "Word address in binary",
              "answers": [
                "10101111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10101111"
            },
            {
              "id": "q6_6_tag",
              "label": "Tag in binary",
              "answers": [
                "1010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1010"
            },
            {
              "id": "q6_6_idx",
              "label": "Set index in binary",
              "answers": [
                "111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "111"
            },
            {
              "id": "q6_6_off",
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
              "id": "q6_6_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q6_r6_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r6_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r6_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r6_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r6_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x2e",
          "cells": [
            {
              "id": "q6_7_bin",
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
              "id": "q6_7_tag",
              "label": "Tag in binary",
              "answers": [
                "0010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010"
            },
            {
              "id": "q6_7_idx",
              "label": "Set index in binary",
              "answers": [
                "111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "111"
            },
            {
              "id": "q6_7_off",
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
              "id": "q6_7_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r7_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r7_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r7_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r7_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r7_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              },
              {
                "id": "q6_r7_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0010"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x4f",
          "cells": [
            {
              "id": "q6_8_bin",
              "label": "Word address in binary",
              "answers": [
                "01001111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01001111"
            },
            {
              "id": "q6_8_tag",
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
              "id": "q6_8_idx",
              "label": "Set index in binary",
              "answers": [
                "111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "111"
            },
            {
              "id": "q6_8_off",
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
              "id": "q6_8_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r8_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r8_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r8_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r8_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r8_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              },
              {
                "id": "q6_r8_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0010"
              }
            ],
            [
              {
                "id": "q6_r8_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(111)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0100"
              }
            ]
          ]
        },
        {
          "addr": "0xa5",
          "cells": [
            {
              "id": "q6_9_bin",
              "label": "Word address in binary",
              "answers": [
                "10100101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10100101"
            },
            {
              "id": "q6_9_tag",
              "label": "Tag in binary",
              "answers": [
                "1010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1010"
            },
            {
              "id": "q6_9_idx",
              "label": "Set index in binary",
              "answers": [
                "010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "010"
            },
            {
              "id": "q6_9_off",
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
              "id": "q6_9_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q6_r9_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r9_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r9_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r9_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r9_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              },
              {
                "id": "q6_r9_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0010"
              }
            ],
            [
              {
                "id": "q6_r9_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(111)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0100"
              }
            ]
          ]
        },
        {
          "addr": "0xaf",
          "cells": [
            {
              "id": "q6_10_bin",
              "label": "Word address in binary",
              "answers": [
                "10101111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10101111"
            },
            {
              "id": "q6_10_tag",
              "label": "Tag in binary",
              "answers": [
                "1010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1010"
            },
            {
              "id": "q6_10_idx",
              "label": "Set index in binary",
              "answers": [
                "111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "111"
            },
            {
              "id": "q6_10_off",
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
              "id": "q6_10_hm",
              "label": "Hit or Miss",
              "answers": [
                "H",
                "hit"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "H"
            },
            [
              {
                "id": "q6_r10_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r10_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r10_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r10_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r10_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              },
              {
                "id": "q6_r10_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0010"
              }
            ],
            [
              {
                "id": "q6_r10_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(111)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0100"
              }
            ]
          ]
        },
        {
          "addr": "0xca",
          "cells": [
            {
              "id": "q6_11_bin",
              "label": "Word address in binary",
              "answers": [
                "11001010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11001010"
            },
            {
              "id": "q6_11_tag",
              "label": "Tag in binary",
              "answers": [
                "1100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1100"
            },
            {
              "id": "q6_11_idx",
              "label": "Set index in binary",
              "answers": [
                "101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "101"
            },
            {
              "id": "q6_11_off",
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
              "id": "q6_11_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r11_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r11_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r11_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r11_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r11_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              },
              {
                "id": "q6_r11_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0010"
              }
            ],
            [
              {
                "id": "q6_r11_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(101)=1100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1100"
              },
              {
                "id": "q6_r11_w2_1",
                "label": "Way 2 line 2",
                "answers": [
                  "T(111)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0100"
              }
            ]
          ]
        },
        {
          "addr": "0x3f",
          "cells": [
            {
              "id": "q6_12_bin",
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
              "id": "q6_12_tag",
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
              "id": "q6_12_idx",
              "label": "Set index in binary",
              "answers": [
                "111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "111"
            },
            {
              "id": "q6_12_off",
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
              "id": "q6_12_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r12_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r12_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r12_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r12_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r12_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              },
              {
                "id": "q6_r12_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0011"
              }
            ],
            [
              {
                "id": "q6_r12_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(101)=1100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1100"
              },
              {
                "id": "q6_r12_w2_1",
                "label": "Way 2 line 2",
                "answers": [
                  "T(111)=0100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0100"
              }
            ]
          ]
        },
        {
          "addr": "0xde",
          "cells": [
            {
              "id": "q6_13_bin",
              "label": "Word address in binary",
              "answers": [
                "11011110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11011110"
            },
            {
              "id": "q6_13_tag",
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
              "id": "q6_13_idx",
              "label": "Set index in binary",
              "answers": [
                "111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "111"
            },
            {
              "id": "q6_13_off",
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
              "id": "q6_13_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            },
            [
              {
                "id": "q6_r13_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(010)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(010)=1010"
              },
              {
                "id": "q6_r13_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(101)=0000"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0000"
              },
              {
                "id": "q6_r13_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0110"
              },
              {
                "id": "q6_r13_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(111)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1010"
              }
            ],
            [
              {
                "id": "q6_r13_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(101)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=0011"
              },
              {
                "id": "q6_r13_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0011"
              }
            ],
            [
              {
                "id": "q6_r13_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(101)=1100"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(101)=1100"
              },
              {
                "id": "q6_r13_w2_1",
                "label": "Way 2 line 2",
                "answers": [
                  "T(111)=1101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1101"
              }
            ]
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q6_full",
          "label": "After these accesses, is the cache full?",
          "answers": [
            "no",
            "n"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "no"
        },
        {
          "id": "q6_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "2"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "2"
        }
      ],
      "solution": "Block offset = 1 bit(s), set index = 3 bit(s), tag = 4 bit(s). Hit/Miss sequence: M, M, M, H, M, M, H, M, M, H, H, M, M, M. Cache full: no. Replacements: 2."
    },
    {
      "id": "q7",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: or",
      "image": "single_cycle_datapath",
      "prompt": "Let the processor execute:<br><code>or x24, x15, x16</code><br>at address <b>5008</b>. Suppose register xi = <b>40i</b> for i=1,...,31. Suppose memory[M] = <b>M + 900</b>.",
      "fields": [
        {
          "id": "q7_RegWrite",
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
          "id": "q7_ALUSrc",
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
          "id": "q7_MemWrite",
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
          "id": "q7_MemtoReg",
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
          "id": "q7_MemRead",
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
          "id": "q7_Branch",
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
          "id": "q7_ALUOp",
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
          "id": "q7_O",
          "label": "O",
          "answers": [
            "0001"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0001"
        },
        {
          "id": "q7_Zero",
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
          "id": "q7_A",
          "label": "A",
          "answers": [
            "5008"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5008"
        },
        {
          "id": "q7_B",
          "label": "B",
          "answers": [
            "0x0107EC33"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x0107EC33"
        },
        {
          "id": "q7_C",
          "label": "C",
          "answers": [
            "01111"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01111"
        },
        {
          "id": "q7_D",
          "label": "D",
          "answers": [
            "10000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10000"
        },
        {
          "id": "q7_E",
          "label": "E",
          "answers": [
            "11000"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "11000"
        },
        {
          "id": "q7_F",
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
          "id": "q7_G",
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
          "id": "q7_H",
          "label": "H",
          "answers": [
            "5012"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5012"
        },
        {
          "id": "q7_I",
          "label": "I",
          "answers": [
            "600"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "600"
        },
        {
          "id": "q7_J",
          "label": "J",
          "answers": [
            "640"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "640"
        },
        {
          "id": "q7_K",
          "label": "K",
          "answers": [
            "728"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "728"
        },
        {
          "id": "q7_L",
          "label": "L",
          "answers": [
            "640"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "640"
        },
        {
          "id": "q7_M",
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
          "id": "q7_N",
          "label": "N",
          "answers": [
            "728"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "728"
        },
        {
          "id": "q7_P",
          "label": "P",
          "answers": [
            "5008"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5008"
        },
        {
          "id": "q7_Q",
          "label": "Q",
          "answers": [
            "5012"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5012"
        },
        {
          "id": "q7_R",
          "label": "R",
          "answers": [
            "5008"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "5008"
        }
      ],
      "solution": "R-type or uses ALUSrc=0 and ALUOp=10. x15=600, x16=640, so 600 OR 640 = 728."
    },
    {
      "id": "q8",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 2-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ 2-Way Set Associative Cache<br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>128 bytes</b><br>■ Cache size is <b>32 KB</b><br>■ Memory is byte addressing with 32-bit addresses",
      "fields": [
        {
          "id": "q8_idx",
          "label": "Set index",
          "answers": [
            "7"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "7"
        },
        {
          "id": "q8_off",
          "label": "Block offset",
          "answers": [
            "7"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "7"
        },
        {
          "id": "q8_tag",
          "label": "Tag size for a block",
          "answers": [
            "18"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "18"
        },
        {
          "id": "q8_blocks",
          "label": "Number of blocks",
          "answers": [
            "256"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "256"
        },
        {
          "id": "q8_total",
          "label": "Total bits required to implement the cache",
          "answers": [
            "267264"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "267264"
        }
      ],
      "solution": "Blocks = 32KB/128B = 256. Sets = 256/2 = 128, so index = 7 bits. Offset = 7 bits. Tag = 18 bits. Total = 256×(1024+18+1+1)=267264 bits."
    },
    {
      "id": "q9",
      "type": "pipeline",
      "points": 10,
      "title": "5-stage pipeline with forwarding and hazard detection",
      "image": "pipeline_datapath",
      "prompt": "Assume that the following code sequence is executed on the 5-stage pipelined processor with forwarding and hazard detection units shown below:<br><pre>add x27, x10, x11\nlw  x28, 16(x27)\nlw  x29, 0(x27)\nor  x28, x27, x28\nsw  x28, 8(x27)</pre>For the first seven cycles, specify the values of control signals at A, B, C, D, E, F, and G.",
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
          "id": "q9_r0_A",
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
          "id": "q9_r0_B",
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
          "id": "q9_r0_C",
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
          "id": "q9_r0_D",
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
          "id": "q9_r0_E",
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
          "id": "q9_r0_F",
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
          "id": "q9_r0_G",
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
          "id": "q9_r1_A",
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
          "id": "q9_r1_B",
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
          "id": "q9_r1_C",
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
          "id": "q9_r1_D",
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
          "id": "q9_r1_E",
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
          "id": "q9_r1_F",
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
          "id": "q9_r1_G",
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
          "id": "q9_r2_A",
          "label": "3rd - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r2_B",
          "label": "3rd - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r2_C",
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
          "id": "q9_r2_D",
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
          "id": "q9_r2_E",
          "label": "3rd - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r2_F",
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
          "id": "q9_r2_G",
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
          "id": "q9_r3_A",
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
          "id": "q9_r3_B",
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
          "id": "q9_r3_C",
          "label": "4th - C",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q9_r3_D",
          "label": "4th - D",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q9_r3_E",
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
          "id": "q9_r3_F",
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
          "id": "q9_r3_G",
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
          "id": "q9_r4_A",
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
          "id": "q9_r4_B",
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
          "id": "q9_r4_C",
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
          "id": "q9_r4_D",
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
          "id": "q9_r4_E",
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
          "id": "q9_r4_F",
          "label": "5th - F",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r4_G",
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
          "id": "q9_r5_A",
          "label": "6th - A",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r5_B",
          "label": "6th - B",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r5_C",
          "label": "6th - C",
          "answers": [
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q9_r5_D",
          "label": "6th - D",
          "answers": [
            "01"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01"
        },
        {
          "id": "q9_r5_E",
          "label": "6th - E",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r5_F",
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
          "id": "q9_r5_G",
          "label": "6th - G",
          "answers": [
            "1"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_r6_A",
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
          "id": "q9_r6_B",
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
          "id": "q9_r6_C",
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
          "id": "q9_r6_D",
          "label": "7th - D",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q9_r6_E",
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
          "id": "q9_r6_F",
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
          "id": "q9_r6_G",
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
      "solution": "This sequence has the same forwarding pattern as add → lw → lw → or → sw. A and B stay 1 for the first seven cycles. Forwarding selections are C/D = 10/00, 01/00, 00/01, 00/10 in cycles 4 to 7."
    },
    {
      "id": "q10",
      "type": "access_table",
      "points": 10,
      "title": "4-way set associative cache with true LRU",
      "prompt": "Assume the main memory is word addressing with 8-bit addresses and the cache is a <b>4-way set associative cache</b> with <b>2-word blocks</b> and a total size of <b>32 words</b>. Assume one word is 32 bits.<br><br>Sequence of word addresses:<br><code>0x4, 0x14, 0x24, 0x34, 0x44, 0x4, 0x54, 0x14, 0x64, 0x74, 0x24, 0x84</code><br><br>Assume a true LRU replacement policy. For each reference, identify binary address, tag, set index, offset, and hit/miss.",
      "fields_intro": [
        {
          "id": "q10_cache_blocks",
          "label": "Number of blocks in the cache",
          "answers": [
            "16"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "16"
        },
        {
          "id": "q10_sets",
          "label": "Number of sets in the cache",
          "answers": [
            "4"
          ],
          "type": "decimal",
          "unit": "sets",
          "hint": "",
          "show": "4"
        },
        {
          "id": "q10_mem_blocks",
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
          "id": "q10_tag_bits",
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
          "id": "q10_total_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "1120"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "1120"
        }
      ],
      "columns": [
        "Word Address in Hex",
        "Word Address in Binary",
        "Tag in Binary",
        "Set Index in Binary",
        "Offset in Binary",
        "Hit or Miss"
      ],
      "rows": [
        {
          "addr": "0x4",
          "cells": [
            {
              "id": "q10_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00000100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000100"
            },
            {
              "id": "q10_0_tag",
              "label": "Tag in binary",
              "answers": [
                "00000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000"
            },
            {
              "id": "q10_0_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_0_off",
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
              "id": "q10_0_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x14",
          "cells": [
            {
              "id": "q10_1_bin",
              "label": "Word address in binary",
              "answers": [
                "00010100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010100"
            },
            {
              "id": "q10_1_tag",
              "label": "Tag in binary",
              "answers": [
                "00010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010"
            },
            {
              "id": "q10_1_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_1_off",
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
              "id": "q10_1_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x24",
          "cells": [
            {
              "id": "q10_2_bin",
              "label": "Word address in binary",
              "answers": [
                "00100100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100100"
            },
            {
              "id": "q10_2_tag",
              "label": "Tag in binary",
              "answers": [
                "00100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100"
            },
            {
              "id": "q10_2_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_2_off",
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
              "id": "q10_2_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x34",
          "cells": [
            {
              "id": "q10_3_bin",
              "label": "Word address in binary",
              "answers": [
                "00110100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110100"
            },
            {
              "id": "q10_3_tag",
              "label": "Tag in binary",
              "answers": [
                "00110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00110"
            },
            {
              "id": "q10_3_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_3_off",
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
              "id": "q10_3_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x44",
          "cells": [
            {
              "id": "q10_4_bin",
              "label": "Word address in binary",
              "answers": [
                "01000100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000100"
            },
            {
              "id": "q10_4_tag",
              "label": "Tag in binary",
              "answers": [
                "01000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01000"
            },
            {
              "id": "q10_4_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_4_off",
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
              "id": "q10_4_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x4",
          "cells": [
            {
              "id": "q10_5_bin",
              "label": "Word address in binary",
              "answers": [
                "00000100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000100"
            },
            {
              "id": "q10_5_tag",
              "label": "Tag in binary",
              "answers": [
                "00000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000"
            },
            {
              "id": "q10_5_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_5_off",
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
              "id": "q10_5_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x54",
          "cells": [
            {
              "id": "q10_6_bin",
              "label": "Word address in binary",
              "answers": [
                "01010100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01010100"
            },
            {
              "id": "q10_6_tag",
              "label": "Tag in binary",
              "answers": [
                "01010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01010"
            },
            {
              "id": "q10_6_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_6_off",
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
              "id": "q10_6_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x14",
          "cells": [
            {
              "id": "q10_7_bin",
              "label": "Word address in binary",
              "answers": [
                "00010100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010100"
            },
            {
              "id": "q10_7_tag",
              "label": "Tag in binary",
              "answers": [
                "00010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00010"
            },
            {
              "id": "q10_7_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_7_off",
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
              "id": "q10_7_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x64",
          "cells": [
            {
              "id": "q10_8_bin",
              "label": "Word address in binary",
              "answers": [
                "01100100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01100100"
            },
            {
              "id": "q10_8_tag",
              "label": "Tag in binary",
              "answers": [
                "01100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01100"
            },
            {
              "id": "q10_8_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_8_off",
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
              "id": "q10_8_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x74",
          "cells": [
            {
              "id": "q10_9_bin",
              "label": "Word address in binary",
              "answers": [
                "01110100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01110100"
            },
            {
              "id": "q10_9_tag",
              "label": "Tag in binary",
              "answers": [
                "01110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01110"
            },
            {
              "id": "q10_9_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_9_off",
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
              "id": "q10_9_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x24",
          "cells": [
            {
              "id": "q10_10_bin",
              "label": "Word address in binary",
              "answers": [
                "00100100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100100"
            },
            {
              "id": "q10_10_tag",
              "label": "Tag in binary",
              "answers": [
                "00100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100"
            },
            {
              "id": "q10_10_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_10_off",
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
              "id": "q10_10_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        },
        {
          "addr": "0x84",
          "cells": [
            {
              "id": "q10_11_bin",
              "label": "Word address in binary",
              "answers": [
                "10000100"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10000100"
            },
            {
              "id": "q10_11_tag",
              "label": "Tag in binary",
              "answers": [
                "10000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10000"
            },
            {
              "id": "q10_11_idx",
              "label": "Set index in binary",
              "answers": [
                "10"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10"
            },
            {
              "id": "q10_11_off",
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
              "id": "q10_11_hm",
              "label": "Hit or Miss",
              "answers": [
                "M",
                "miss"
              ],
              "type": "text",
              "unit": "",
              "hint": "",
              "show": "M"
            }
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q10_full",
          "label": "After these accesses, is the cache full?",
          "answers": [
            "no",
            "n"
          ],
          "type": "text",
          "unit": "",
          "hint": "",
          "show": "no"
        },
        {
          "id": "q10_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "8"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "8"
        }
      ],
      "solution": "Block offset = 1 bit(s), set index = 2 bit(s), tag = 5 bit(s). Hit/Miss sequence: M, M, M, M, M, M, M, M, M, M, M, M. Cache full: no. Replacements: 8."
    }
  ]
});
