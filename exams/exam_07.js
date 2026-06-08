window.registerExam({
  "id": "exam_07",
  "title": "Đề luyện tập 07 - RISC-V, Cache và Pipeline",
  "description": "Đề luyện tập 07. Mỗi câu 10 điểm.",
  "questions": [
    {
      "id": "q1",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 8-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ <b>8-Way Set Associative Cache</b><br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>128 bytes</b><br>■ Cache size is <b>256 KB</b><br>■ Memory is byte addressing with <b>32-bit addresses</b>.<br><br>Fill in the following values.",
      "fields": [
        {
          "id": "q1_index",
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
          "id": "q1_offset",
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
          "id": "q1_tag",
          "label": "Tag size for a block",
          "answers": [
            "17"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "17"
        },
        {
          "id": "q1_blocks",
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
          "id": "q1_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "2136064"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "2136064"
        }
      ],
      "solution": "Blocks = 256KB/128B = 2048. Sets = 2048/8 = 256 => index = 8 bits. Offset = log2(128) = 7 bits. Tag = 32 - 8 - 7 = 17 bits. Total = 2048 × (128×8 + 17 + valid 1 + dirty 1) = 2,136,064 bits."
    },
    {
      "id": "q2",
      "type": "pipeline",
      "points": 10,
      "title": "5-stage pipeline with forwarding and hazard detection",
      "image": "pipeline_datapath",
      "prompt": "Assume that the following code sequence is executed on the 5-stage pipelined processor with forwarding and hazard detection units shown below:<br><pre>add x5,  x1, x2\nadd x6,  x5, x3\nlw  x7,  0(x6)\nor  x8,  x7, x5\nsw  x8,  4(x6)</pre>For the first seven cycles, specify the values of control signals at A, B, C, D, E, F, and G.",
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
          "id": "q2_r0_A",
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
          "id": "q2_r0_B",
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
          "id": "q2_r0_C",
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
          "id": "q2_r0_D",
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
          "id": "q2_r0_E",
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
          "id": "q2_r0_F",
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
          "id": "q2_r0_G",
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
          "id": "q2_r1_A",
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
          "id": "q2_r1_B",
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
          "id": "q2_r1_C",
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
          "id": "q2_r1_D",
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
          "id": "q2_r1_E",
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
          "id": "q2_r1_F",
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
          "id": "q2_r1_G",
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
          "id": "q2_r2_A",
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
          "id": "q2_r2_B",
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
          "id": "q2_r2_C",
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
          "id": "q2_r2_D",
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
          "id": "q2_r2_E",
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
          "id": "q2_r2_F",
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
          "id": "q2_r2_G",
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
          "id": "q2_r3_A",
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
          "id": "q2_r3_B",
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
          "id": "q2_r3_C",
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
          "id": "q2_r3_D",
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
          "id": "q2_r3_E",
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
          "id": "q2_r3_F",
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
          "id": "q2_r3_G",
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
          "id": "q2_r4_A",
          "label": "5th - A",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q2_r4_B",
          "label": "5th - B",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q2_r4_C",
          "label": "5th - C",
          "answers": [
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q2_r4_D",
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
          "id": "q2_r4_E",
          "label": "5th - E",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q2_r4_F",
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
          "id": "q2_r4_G",
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
          "id": "q2_r5_A",
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
          "id": "q2_r5_B",
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
          "id": "q2_r5_C",
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
          "id": "q2_r5_D",
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
          "id": "q2_r5_E",
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
          "id": "q2_r5_F",
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
          "id": "q2_r5_G",
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
          "id": "q2_r6_A",
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
          "id": "q2_r6_B",
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
          "id": "q2_r6_C",
          "label": "7th - C",
          "answers": [
            "01"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01"
        },
        {
          "id": "q2_r6_D",
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
          "id": "q2_r6_E",
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
          "id": "q2_r6_F",
          "label": "7th - F",
          "answers": [
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q2_r6_G",
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
      "solution": "The sequence has a direct load-use hazard between lw x7 and or x8. In cycle 5, PCWrite and IF/IDWrite are 0 and the control mux is 0. Forwarding is also needed for add x6 using x5 and for lw using x6."
    },
    {
      "id": "q3",
      "type": "fields",
      "points": 10,
      "title": "Fully associative cache parameters",
      "prompt": "Assume the main memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>fully associative cache</b> with <b>4-word blocks</b> and a total size of <b>32 words</b>. Assume one word is <b>64 bits</b>.",
      "fields": [
        {
          "id": "q3_blocks_cache",
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
          "id": "q3_sets",
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
          "id": "q3_blocks_mem",
          "label": "Number of blocks in the memory",
          "answers": [
            "64"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "64"
        },
        {
          "id": "q3_tag",
          "label": "Number of tag bits in each block",
          "answers": [
            "6"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "6"
        },
        {
          "id": "q3_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "2104"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "2104"
        }
      ],
      "solution": "Cache blocks = 32/4 = 8. Fully associative => one set. Memory blocks = 2^8/4 = 64. Offset = log2(4)=2 bits, so tag = 8-2 = 6 bits. Total = 8 × (4×64 + 6 tag + 1 valid) = 2104 bits."
    },
    {
      "id": "q4",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: lw",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>lw x18, 76(x7)</code><br>at address <b>4092</b>. Suppose register xi = <b>36i</b> for i=1,...,31. Suppose memory[M] = <b>M + 550</b>.",
      "fields": [
        {
          "id": "q4_RegWrite",
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
          "id": "q4_ALUSrc",
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
          "id": "q4_MemWrite",
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
          "id": "q4_MemtoReg",
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
          "id": "q4_MemRead",
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
          "id": "q4_Branch",
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
          "id": "q4_ALUOp",
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
          "id": "q4_O",
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
          "id": "q4_Zero",
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
          "id": "q4_A",
          "label": "A",
          "answers": [
            "4092"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "4092"
        },
        {
          "id": "q4_B",
          "label": "B",
          "answers": [
            "0x04C3A903"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x04C3A903"
        },
        {
          "id": "q4_C",
          "label": "C",
          "answers": [
            "00111"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00111"
        },
        {
          "id": "q4_D",
          "label": "D",
          "answers": [
            "01100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01100"
        },
        {
          "id": "q4_E",
          "label": "E",
          "answers": [
            "10010"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10010"
        },
        {
          "id": "q4_F",
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
          "id": "q4_G",
          "label": "G",
          "answers": [
            "152"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "152"
        },
        {
          "id": "q4_H",
          "label": "H",
          "answers": [
            "4096"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "4096"
        },
        {
          "id": "q4_I",
          "label": "I",
          "answers": [
            "252"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "252"
        },
        {
          "id": "q4_J",
          "label": "J",
          "answers": [
            "76"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "76"
        },
        {
          "id": "q4_K",
          "label": "K",
          "answers": [
            "328"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "328"
        },
        {
          "id": "q4_L",
          "label": "L",
          "answers": [
            "432"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "432"
        },
        {
          "id": "q4_M",
          "label": "M",
          "answers": [
            "878"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "878"
        },
        {
          "id": "q4_N",
          "label": "N",
          "answers": [
            "878"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "878"
        },
        {
          "id": "q4_P",
          "label": "P",
          "answers": [
            "4092"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "4092"
        },
        {
          "id": "q4_Q",
          "label": "Q",
          "answers": [
            "4096"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "4096"
        },
        {
          "id": "q4_R",
          "label": "R",
          "answers": [
            "4244"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "4244"
        }
      ],
      "solution": "x7 = 36×7 = 252. Effective address = 252 + 76 = 328. Memory[328] = 328 + 550 = 878, so the value written back to x18 is 878. The instruction encoding is 0x04C3A903."
    },
    {
      "id": "q5",
      "type": "access_table",
      "points": 10,
      "title": "3-way set associative cache, điền Way theo thứ tự đưa vào",
      "prompt": "Assume the memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>3-way set associative cache</b> with <b>2-word blocks</b> and a total size of <b>48 words</b>. Assume 1 word = <b>64 bits</b>.<br><br>First, fill in the cache parameters. Then use true LRU. For each reference, identify binary address, tag, set index, offset, hit/miss, and the tags in each way after the reference has been handled.<br><br><b>Lưu ý:</b> Nếu một Way có nhiều dòng như T(001)=0000, T(010)=1011, mỗi dòng sẽ là một ô nhập riêng. Các dòng trong Way giữ theo <b>thứ tự block được đưa vào way</b>, không sort theo set index.<br><br>Sequence of word addresses:<br><code>0x18, 0xa2, 0x5d, 0x19, 0xb6, 0x62, 0xb7, 0x3e, 0x7f, 0xa3, 0x63, 0xe2, 0x22, 0xfe</code>",
      "fields_intro": [
        {
          "id": "q5_cache_blocks",
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
          "id": "q5_sets",
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
          "id": "q5_mem_blocks",
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
          "id": "q5_tag_bits",
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
          "id": "q5_total_bits",
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
          "addr": "0x18",
          "cells": [
            {
              "id": "q5_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00011000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00011000"
            },
            {
              "id": "q5_0_tag",
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
              "id": "q5_0_idx",
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
              "id": "q5_0_off",
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
              "id": "q5_0_hm",
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
                "id": "q5_r0_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0xa2",
          "cells": [
            {
              "id": "q5_1_bin",
              "label": "Word address in binary",
              "answers": [
                "10100010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10100010"
            },
            {
              "id": "q5_1_tag",
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
              "id": "q5_1_idx",
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
              "id": "q5_1_off",
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
              "id": "q5_1_hm",
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
                "id": "q5_r1_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r1_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x5d",
          "cells": [
            {
              "id": "q5_2_bin",
              "label": "Word address in binary",
              "answers": [
                "01011101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01011101"
            },
            {
              "id": "q5_2_tag",
              "label": "Tag in binary",
              "answers": [
                "0101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101"
            },
            {
              "id": "q5_2_idx",
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
              "id": "q5_2_off",
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
              "id": "q5_2_hm",
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
                "id": "q5_r2_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r2_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r2_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x19",
          "cells": [
            {
              "id": "q5_3_bin",
              "label": "Word address in binary",
              "answers": [
                "00011001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00011001"
            },
            {
              "id": "q5_3_tag",
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
              "id": "q5_3_idx",
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
              "id": "q5_3_off",
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
              "id": "q5_3_hm",
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
                "id": "q5_r3_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r3_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r3_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0xb6",
          "cells": [
            {
              "id": "q5_4_bin",
              "label": "Word address in binary",
              "answers": [
                "10110110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10110110"
            },
            {
              "id": "q5_4_tag",
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
              "id": "q5_4_idx",
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
              "id": "q5_4_off",
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
              "id": "q5_4_hm",
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
                "id": "q5_r4_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r4_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r4_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r4_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              }
            ],
            [],
            []
          ]
        },
        {
          "addr": "0x62",
          "cells": [
            {
              "id": "q5_5_bin",
              "label": "Word address in binary",
              "answers": [
                "01100010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01100010"
            },
            {
              "id": "q5_5_tag",
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
              "id": "q5_5_idx",
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
              "id": "q5_5_off",
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
              "id": "q5_5_hm",
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
                "id": "q5_r5_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r5_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r5_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r5_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              }
            ],
            [
              {
                "id": "q5_r5_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xb7",
          "cells": [
            {
              "id": "q5_6_bin",
              "label": "Word address in binary",
              "answers": [
                "10110111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10110111"
            },
            {
              "id": "q5_6_tag",
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
              "id": "q5_6_idx",
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
              "id": "q5_6_off",
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
              "id": "q5_6_hm",
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
                "id": "q5_r6_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r6_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r6_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r6_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              }
            ],
            [
              {
                "id": "q5_r6_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x3e",
          "cells": [
            {
              "id": "q5_7_bin",
              "label": "Word address in binary",
              "answers": [
                "00111110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00111110"
            },
            {
              "id": "q5_7_tag",
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
              "id": "q5_7_idx",
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
              "id": "q5_7_off",
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
              "id": "q5_7_hm",
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
                "id": "q5_r7_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r7_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r7_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r7_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              },
              {
                "id": "q5_r7_w0_4",
                "label": "Way 0 line 5",
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
                "id": "q5_r7_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x7f",
          "cells": [
            {
              "id": "q5_8_bin",
              "label": "Word address in binary",
              "answers": [
                "01111111"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01111111"
            },
            {
              "id": "q5_8_tag",
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
              "id": "q5_8_idx",
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
              "id": "q5_8_off",
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
              "id": "q5_8_hm",
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
                "id": "q5_r8_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r8_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r8_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r8_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              },
              {
                "id": "q5_r8_w0_4",
                "label": "Way 0 line 5",
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
                "id": "q5_r8_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              },
              {
                "id": "q5_r8_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0111"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xa3",
          "cells": [
            {
              "id": "q5_9_bin",
              "label": "Word address in binary",
              "answers": [
                "10100011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10100011"
            },
            {
              "id": "q5_9_tag",
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
              "id": "q5_9_idx",
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
              "id": "q5_9_off",
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
              "id": "q5_9_hm",
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
                "id": "q5_r9_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r9_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r9_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r9_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              },
              {
                "id": "q5_r9_w0_4",
                "label": "Way 0 line 5",
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
                "id": "q5_r9_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              },
              {
                "id": "q5_r9_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0111"
              }
            ],
            []
          ]
        },
        {
          "addr": "0x63",
          "cells": [
            {
              "id": "q5_10_bin",
              "label": "Word address in binary",
              "answers": [
                "01100011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01100011"
            },
            {
              "id": "q5_10_tag",
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
              "id": "q5_10_idx",
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
              "id": "q5_10_off",
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
              "id": "q5_10_hm",
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
                "id": "q5_r10_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r10_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r10_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r10_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              },
              {
                "id": "q5_r10_w0_4",
                "label": "Way 0 line 5",
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
                "id": "q5_r10_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              },
              {
                "id": "q5_r10_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0111"
              }
            ],
            []
          ]
        },
        {
          "addr": "0xe2",
          "cells": [
            {
              "id": "q5_11_bin",
              "label": "Word address in binary",
              "answers": [
                "11100010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11100010"
            },
            {
              "id": "q5_11_tag",
              "label": "Tag in binary",
              "answers": [
                "1110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1110"
            },
            {
              "id": "q5_11_idx",
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
              "id": "q5_11_off",
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
              "id": "q5_11_hm",
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
                "id": "q5_r11_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r11_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=1010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1010"
              },
              {
                "id": "q5_r11_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r11_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              },
              {
                "id": "q5_r11_w0_4",
                "label": "Way 0 line 5",
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
                "id": "q5_r11_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              },
              {
                "id": "q5_r11_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0111"
              }
            ],
            [
              {
                "id": "q5_r11_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(001)=1110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1110"
              }
            ]
          ]
        },
        {
          "addr": "0x22",
          "cells": [
            {
              "id": "q5_12_bin",
              "label": "Word address in binary",
              "answers": [
                "00100010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100010"
            },
            {
              "id": "q5_12_tag",
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
              "id": "q5_12_idx",
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
              "id": "q5_12_off",
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
              "id": "q5_12_hm",
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
                "id": "q5_r12_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r12_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=0010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0010"
              },
              {
                "id": "q5_r12_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r12_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              },
              {
                "id": "q5_r12_w0_4",
                "label": "Way 0 line 5",
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
                "id": "q5_r12_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              },
              {
                "id": "q5_r12_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0111"
              }
            ],
            [
              {
                "id": "q5_r12_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(001)=1110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1110"
              }
            ]
          ]
        },
        {
          "addr": "0xfe",
          "cells": [
            {
              "id": "q5_13_bin",
              "label": "Word address in binary",
              "answers": [
                "11111110"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "11111110"
            },
            {
              "id": "q5_13_tag",
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
              "id": "q5_13_idx",
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
              "id": "q5_13_off",
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
              "id": "q5_13_hm",
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
                "id": "q5_r13_w0_0",
                "label": "Way 0 line 1",
                "answers": [
                  "T(100)=0001"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(100)=0001"
              },
              {
                "id": "q5_r13_w0_1",
                "label": "Way 0 line 2",
                "answers": [
                  "T(001)=0010"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0010"
              },
              {
                "id": "q5_r13_w0_2",
                "label": "Way 0 line 3",
                "answers": [
                  "T(110)=0101"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(110)=0101"
              },
              {
                "id": "q5_r13_w0_3",
                "label": "Way 0 line 4",
                "answers": [
                  "T(011)=1011"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(011)=1011"
              },
              {
                "id": "q5_r13_w0_4",
                "label": "Way 0 line 5",
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
                "id": "q5_r13_w1_0",
                "label": "Way 1 line 1",
                "answers": [
                  "T(001)=0110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=0110"
              },
              {
                "id": "q5_r13_w1_1",
                "label": "Way 1 line 2",
                "answers": [
                  "T(111)=0111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=0111"
              }
            ],
            [
              {
                "id": "q5_r13_w2_0",
                "label": "Way 2 line 1",
                "answers": [
                  "T(001)=1110"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(001)=1110"
              },
              {
                "id": "q5_r13_w2_1",
                "label": "Way 2 line 2",
                "answers": [
                  "T(111)=1111"
                ],
                "type": "symbol",
                "unit": "",
                "hint": "",
                "show": "T(111)=1111"
              }
            ]
          ]
        }
      ],
      "fields_extra": [
        {
          "id": "q5_full",
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
          "id": "q5_repl",
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
      "solution": "Block offset = 1 bit, set index = 3 bits, tag = 4 bits. Hit/Miss sequence: M, M, M, H, M, M, H, M, M, H, H, M, M, M. Cache full: no. Replacements: 1. Way entries keep physical insertion order, not sorted by set index."
    },
    {
      "id": "q6",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: sub",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>sub x23, x12, x14</code><br>at address <b>6000</b>. Suppose register xi = <b>28i</b> for i=1,...,31. Suppose memory[M] = <b>M + 800</b>.",
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
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
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
            "0"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0"
        },
        {
          "id": "q6_MemRead",
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
            "10"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q6_O",
          "label": "O",
          "answers": [
            "0110"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0110"
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
            "6000"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6000"
        },
        {
          "id": "q6_B",
          "label": "B",
          "answers": [
            "0x40E60BB3"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x40E60BB3"
        },
        {
          "id": "q6_C",
          "label": "C",
          "answers": [
            "01100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01100"
        },
        {
          "id": "q6_D",
          "label": "D",
          "answers": [
            "01110"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01110"
        },
        {
          "id": "q6_E",
          "label": "E",
          "answers": [
            "10111"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "10111"
        },
        {
          "id": "q6_F",
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
          "id": "q6_G",
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
          "id": "q6_H",
          "label": "H",
          "answers": [
            "6004"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6004"
        },
        {
          "id": "q6_I",
          "label": "I",
          "answers": [
            "336"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "336"
        },
        {
          "id": "q6_J",
          "label": "J",
          "answers": [
            "392"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "392"
        },
        {
          "id": "q6_K",
          "label": "K",
          "answers": [
            "-56"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-56"
        },
        {
          "id": "q6_L",
          "label": "L",
          "answers": [
            "392"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "392"
        },
        {
          "id": "q6_M",
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
          "id": "q6_N",
          "label": "N",
          "answers": [
            "-56"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "-56"
        },
        {
          "id": "q6_P",
          "label": "P",
          "answers": [
            "6000"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6000"
        },
        {
          "id": "q6_Q",
          "label": "Q",
          "answers": [
            "6004"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6004"
        },
        {
          "id": "q6_R",
          "label": "R",
          "answers": [
            "6000"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "6000"
        }
      ],
      "solution": "x12 = 336 and x14 = 392. The ALU performs subtraction, so K = 336 - 392 = -56 and N = -56. The instruction encoding is 0x40E60BB3."
    },
    {
      "id": "q7",
      "type": "datapath",
      "points": 10,
      "title": "Single-cycle RISC-V datapath: sw",
      "image": "single_cycle_datapath",
      "prompt": "Consider a single-cycle RISC-V processor with add, sub, and, or, lw, sw and beq.<br><br>Let the processor execute:<br><code>sw x13, 88(x4)</code><br>at address <b>7020</b>. Suppose register xi = <b>44i</b> for i=1,...,31. Suppose memory[M] = <b>M + 600</b>.",
      "fields": [
        {
          "id": "q7_RegWrite",
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
          "id": "q7_ALUSrc",
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
          "id": "q7_MemWrite",
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
          "id": "q7_MemtoReg",
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
            "00"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00"
        },
        {
          "id": "q7_O",
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
            "7020"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7020"
        },
        {
          "id": "q7_B",
          "label": "B",
          "answers": [
            "0x04D22C23"
          ],
          "type": "hex",
          "unit": "",
          "hint": "",
          "show": "0x04D22C23"
        },
        {
          "id": "q7_C",
          "label": "C",
          "answers": [
            "00100"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "00100"
        },
        {
          "id": "q7_D",
          "label": "D",
          "answers": [
            "01101"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "01101"
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
            "0100011"
          ],
          "type": "binary",
          "unit": "",
          "hint": "",
          "show": "0100011"
        },
        {
          "id": "q7_G",
          "label": "G",
          "answers": [
            "176"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "176"
        },
        {
          "id": "q7_H",
          "label": "H",
          "answers": [
            "7024"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7024"
        },
        {
          "id": "q7_I",
          "label": "I",
          "answers": [
            "176"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "176"
        },
        {
          "id": "q7_J",
          "label": "J",
          "answers": [
            "88"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "88"
        },
        {
          "id": "q7_K",
          "label": "K",
          "answers": [
            "264"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "264"
        },
        {
          "id": "q7_L",
          "label": "L",
          "answers": [
            "572"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "572"
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
            "x"
          ],
          "type": "symbol",
          "unit": "",
          "hint": "",
          "show": "x"
        },
        {
          "id": "q7_P",
          "label": "P",
          "answers": [
            "7020"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7020"
        },
        {
          "id": "q7_Q",
          "label": "Q",
          "answers": [
            "7024"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7024"
        },
        {
          "id": "q7_R",
          "label": "R",
          "answers": [
            "7196"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "7196"
        }
      ],
      "solution": "x4 = 176 and x13 = 572. Effective address = 176 + 88 = 264. The store writes 572 to memory address 264. The instruction encoding is 0x04D22C23."
    },
    {
      "id": "q8",
      "type": "access_table",
      "points": 10,
      "title": "Fully associative cache với true LRU",
      "prompt": "Assume the main memory is <b>word addressing</b> with <b>8-bit addresses</b> and the cache is a <b>fully associative cache</b> with <b>two-word blocks</b> and a total size of <b>16 words</b>. Assume one word is <b>32 bits</b>.<br><br>For the sequence below, use true LRU. For each reference, identify binary address, tag, and hit/miss.<br><br>Sequence of word addresses:<br><code>0x01, 0x22, 0x3f, 0x40, 0x23, 0x5a, 0x41, 0x01, 0x7c, 0x5b, 0x80, 0x22, 0x9a, 0x7d</code>",
      "columns": [
        "Word Address in Hex",
        "Word Address in Binary",
        "Tag in Binary",
        "Hit or Miss"
      ],
      "rows": [
        {
          "addr": "0x01",
          "cells": [
            {
              "id": "q8_0_bin",
              "label": "Word address in binary",
              "answers": [
                "00000001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000001"
            },
            {
              "id": "q8_0_tag",
              "label": "Tag in binary",
              "answers": [
                "0000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000000"
            },
            {
              "id": "q8_0_hm",
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
          "addr": "0x22",
          "cells": [
            {
              "id": "q8_1_bin",
              "label": "Word address in binary",
              "answers": [
                "00100010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100010"
            },
            {
              "id": "q8_1_tag",
              "label": "Tag in binary",
              "answers": [
                "0010001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010001"
            },
            {
              "id": "q8_1_hm",
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
              "id": "q8_2_bin",
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
              "id": "q8_2_tag",
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
              "id": "q8_2_hm",
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
          "addr": "0x40",
          "cells": [
            {
              "id": "q8_3_bin",
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
              "id": "q8_3_tag",
              "label": "Tag in binary",
              "answers": [
                "0100000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100000"
            },
            {
              "id": "q8_3_hm",
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
          "addr": "0x23",
          "cells": [
            {
              "id": "q8_4_bin",
              "label": "Word address in binary",
              "answers": [
                "00100011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100011"
            },
            {
              "id": "q8_4_tag",
              "label": "Tag in binary",
              "answers": [
                "0010001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010001"
            },
            {
              "id": "q8_4_hm",
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
          "addr": "0x5a",
          "cells": [
            {
              "id": "q8_5_bin",
              "label": "Word address in binary",
              "answers": [
                "01011010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01011010"
            },
            {
              "id": "q8_5_tag",
              "label": "Tag in binary",
              "answers": [
                "0101101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101101"
            },
            {
              "id": "q8_5_hm",
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
          "addr": "0x41",
          "cells": [
            {
              "id": "q8_6_bin",
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
              "id": "q8_6_tag",
              "label": "Tag in binary",
              "answers": [
                "0100000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0100000"
            },
            {
              "id": "q8_6_hm",
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
          "addr": "0x01",
          "cells": [
            {
              "id": "q8_7_bin",
              "label": "Word address in binary",
              "answers": [
                "00000001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00000001"
            },
            {
              "id": "q8_7_tag",
              "label": "Tag in binary",
              "answers": [
                "0000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0000000"
            },
            {
              "id": "q8_7_hm",
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
              "id": "q8_8_bin",
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
              "id": "q8_8_tag",
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
              "id": "q8_8_hm",
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
          "addr": "0x5b",
          "cells": [
            {
              "id": "q8_9_bin",
              "label": "Word address in binary",
              "answers": [
                "01011011"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01011011"
            },
            {
              "id": "q8_9_tag",
              "label": "Tag in binary",
              "answers": [
                "0101101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0101101"
            },
            {
              "id": "q8_9_hm",
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
          "addr": "0x80",
          "cells": [
            {
              "id": "q8_10_bin",
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
              "id": "q8_10_tag",
              "label": "Tag in binary",
              "answers": [
                "1000000"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1000000"
            },
            {
              "id": "q8_10_hm",
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
          "addr": "0x22",
          "cells": [
            {
              "id": "q8_11_bin",
              "label": "Word address in binary",
              "answers": [
                "00100010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "00100010"
            },
            {
              "id": "q8_11_tag",
              "label": "Tag in binary",
              "answers": [
                "0010001"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "0010001"
            },
            {
              "id": "q8_11_hm",
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
          "addr": "0x9a",
          "cells": [
            {
              "id": "q8_12_bin",
              "label": "Word address in binary",
              "answers": [
                "10011010"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "10011010"
            },
            {
              "id": "q8_12_tag",
              "label": "Tag in binary",
              "answers": [
                "1001101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "1001101"
            },
            {
              "id": "q8_12_hm",
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
          "addr": "0x7d",
          "cells": [
            {
              "id": "q8_13_bin",
              "label": "Word address in binary",
              "answers": [
                "01111101"
              ],
              "type": "binary",
              "unit": "",
              "hint": "",
              "show": "01111101"
            },
            {
              "id": "q8_13_tag",
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
              "id": "q8_13_hm",
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
        }
      ],
      "fields_extra": [
        {
          "id": "q8_full",
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
          "id": "q8_repl",
          "label": "How many replacements occurred?",
          "answers": [
            "0"
          ],
          "type": "decimal",
          "unit": "",
          "hint": "",
          "show": "0"
        }
      ],
      "solution": "Two-word blocks => offset = 1 bit and tag = upper 7 bits. Hit/Miss sequence: M, M, M, M, H, M, H, H, M, H, M, H, M, H. Cache full: yes. Replacements: 0."
    },
    {
      "id": "q9",
      "type": "fields",
      "points": 10,
      "title": "Execution time: single-cycle vs pipeline",
      "prompt": "Consider the following sequence of 32-bit RISC-V instructions:<br><pre>add x10, x1,  x2\nlw  x11, 0(x10)\nadd x12, x11, x3\nor  x13, x12, x10\nsw  x13, 4(x10)</pre>a) Single-cycle processor clock cycle time = <b>1000 ps</b>.<br>b) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, without forwarding or hazard detection units. Insert NOPs to ensure correct execution.<br>c) 5-stage pipelined processor clock cycle time = <b>250 ps</b>, with forwarding/hazard detection units.<br>d) Which case gives the medium performance?",
      "fields": [
        {
          "id": "q9_a",
          "label": "a) Execution time on single-cycle processor",
          "answers": [
            "5000"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "5000"
        },
        {
          "id": "q9_b_nop",
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
          "id": "q9_b_cycles",
          "label": "b) Number of cycles after inserting NOPs",
          "answers": [
            "17"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "17"
        },
        {
          "id": "q9_b_time",
          "label": "b) Execution time without forwarding/hazard detection",
          "answers": [
            "4250"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "4250"
        },
        {
          "id": "q9_c_stall",
          "label": "c) Number of stalls/NOPs needed with forwarding/hazard detection",
          "answers": [
            "1"
          ],
          "type": "decimal",
          "unit": "stall",
          "hint": "",
          "show": "1"
        },
        {
          "id": "q9_c_cycles",
          "label": "c) Number of cycles",
          "answers": [
            "10"
          ],
          "type": "decimal",
          "unit": "cycles",
          "hint": "",
          "show": "10"
        },
        {
          "id": "q9_c_time",
          "label": "c) Execution time with forwarding/hazard detection",
          "answers": [
            "2500"
          ],
          "type": "decimal",
          "unit": "ps",
          "hint": "",
          "show": "2500"
        },
        {
          "id": "q9_d",
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
      "solution": "Single-cycle: 5×1000 = 5000 ps. Without forwarding/hazard detection, the shown dependencies require 8 NOPs, so 13 instructions including NOPs => 13+4 = 17 cycles => 4250 ps. With forwarding/hazard detection, only the lw x11 -> add x12 load-use dependency needs one stall, so cycles = 5+4+1 = 10 => 2500 ps. The medium performance is case b."
    },
    {
      "id": "q10",
      "type": "fields",
      "points": 10,
      "title": "Cache parameters: 2-way set associative, write-back",
      "prompt": "Here is the cache with the following key characteristics:<br>■ <b>2-Way Set Associative Cache</b><br>■ Write policy: <b>Write-back using write allocate</b> with one Dirty bit per block<br>■ Block size is <b>128 bytes</b><br>■ Cache size is <b>64 KB</b><br>■ Memory is byte addressing with <b>32-bit addresses</b>.<br><br>Fill in the following values.",
      "fields": [
        {
          "id": "q10_index",
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
          "id": "q10_offset",
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
          "id": "q10_tag",
          "label": "Tag size for a block",
          "answers": [
            "17"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "17"
        },
        {
          "id": "q10_blocks",
          "label": "Number of blocks",
          "answers": [
            "512"
          ],
          "type": "decimal",
          "unit": "blocks",
          "hint": "",
          "show": "512"
        },
        {
          "id": "q10_bits",
          "label": "Total bits required to implement the cache",
          "answers": [
            "534016"
          ],
          "type": "decimal",
          "unit": "bits",
          "hint": "",
          "show": "534016"
        }
      ],
      "solution": "Blocks = 64KB/128B = 512. Sets = 512/2 = 256 => index = 8 bits. Offset = 7 bits. Tag = 32-8-7 = 17 bits. Total = 512 × (128×8 + 17 + valid 1 + dirty 1) = 534,016 bits."
    }
  ]
});
