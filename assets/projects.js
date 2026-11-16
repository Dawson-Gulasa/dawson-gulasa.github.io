window.PORTFOLIO_PROJECTS=[
  {
    "slug": "optimus-prime-fpga",
    "title": "Optimus Prime FPGA",
    "subtitle": "An interactive prime-computing system built entirely in digital hardware.",
    "kind": "FPGA / Digital Design",
    "group": "fpga",
    "year": "Spring 2026",
    "featured": true,
    "priority": 1,
    "summary": "A multi-clock-domain Verilog design combining a prime engine, DDR2 memory, VGA display, SD-card verification, and interactive controls on the Nexys A7-100T.",
    "image": "Optimus_Prime_FPGA/media/screenshots/results.PNG",
    "imageAlt": "Prime computation results on the FPGA VGA interface",
    "tech": [
      "Verilog",
      "Vivado",
      "Nexys A7-100T",
      "DDR2 / MIG",
      "VGA",
      "Clock Domain Crossing",
      "SD Card"
    ],
    "metrics": [
      [
        "11",
        "Self-checking RTL testbenches"
      ],
      [
        "640 × 480",
        "VGA graphics"
      ],
      [
        "4",
        "Clock domains managed"
      ]
    ],
    "overview": "Designed and integrated an FPGA system that performs prime-number computations while presenting an interactive graphical interface. The build required coordinating independent compute, input, storage, graphics, and SD verification subsystems on physical hardware.",
    "sections": [
      [
        "Architecture and integration",
        "The prime engine, VGA renderer, DDR2 memory controller, SD reader, and mouse/keypad input each have specialized RTL. Xilinx MIG manages external DDR2, with a framebuffer path shared by display and control logic."
      ],
      [
        "Clock-domain crossing",
        "The design uses asynchronous FIFOs, synchronizers and event handshakes to move data safely among clock domains. This was essential for coordinating FPGA computation, graphics refresh and memory access."
      ],
      [
        "Independent verification",
        "The SD-card test mode reads reference prime values and displays PASS/FAIL feedback. Eleven self-checking Verilog testbenches exercise control logic and subsystem behavior."
      ],
      [
        "Engineering tradeoff",
        "The final report documents functional hardware demonstrations alongside a timing-closure limitation. The reported worst negative slack was approximately −4.9 ns, so the implementation should not be presented as fully timing-closed."
      ]
    ],
    "results": "The original project documented an interactive VGA demonstration, DDR2 storage, SD-based checking and a 90-minute run finding 103,739 primes. These are original project results, not newly reproduced benchmarks.",
    "gallery": [
      [
        "Optimus_Prime_FPGA/media/screenshots/main_menu.PNG",
        "Main FPGA interface"
      ],
      [
        "Optimus_Prime_FPGA/media/screenshots/generating.PNG",
        "Prime computation in progress"
      ],
      [
        "Optimus_Prime_FPGA/media/screenshots/results.PNG",
        "Computation results"
      ],
      [
        "Optimus_Prime_FPGA/media/screenshots/test_mode.PNG",
        "Independent SD-card test mode"
      ]
    ],
    "report": "Optimus_Prime_FPGA/docs/Optimus_Prime_Final_Report.pdf",
    "source": "Optimus_Prime_FPGA",
    "video": "https://drive.google.com/file/d/1Y6Kk9pdHWEqoxA_TOvqOwtG7DTPhfjLm/view?usp=sharing",
    "notes": "Requires the original FPGA board, constraints and vendor IP. The public portfolio is a source and engineering case study; no fresh Vivado bitstream build is claimed."
  },
  {
    "slug": "scc-processor",
    "title": "32-bit SCC Processor",
    "subtitle": "Processor RTL, custom ISA execution and microcoded signed arithmetic.",
    "kind": "Computer Architecture / RTL",
    "group": "fpga",
    "year": "Fall 2026",
    "featured": true,
    "priority": 2,
    "summary": "A modular 32-bit Verilog CPU with architectural register storage, ALU and branch logic, microcoded signed multiplication/division, a stack, and automated verification.",
    "image": "SCC_32bit_Processor/media/scc_architecture.svg",
    "imageAlt": "SCC 32-bit processor functional architecture",
    "tech": [
      "Verilog",
      "Computer Architecture",
      "Microcode",
      "Icarus Verilog",
      "RTL Verification",
      "ALU / Datapath"
    ],
    "metrics": [
      [
        "24",
        "Active RTL modules"
      ],
      [
        "20 / 20",
        "Original regression passes"
      ],
      [
        "9 / 9",
        "Injected faults detected"
      ]
    ],
    "overview": "Developed as a three-person Computer Architecture team project, this custom-ISA processor spans instruction fetch and decode, ALU and branch execution, architectural register storage, writeback and a 16-word PUSH/POP stack.",
    "sections": [
      [
        "Processor and ISA",
        "The datapath includes register reads and writes, arithmetic and logic, memory operations, branches and SNZCV architectural flags. R13 is the stack pointer, R14 is constant zero, and R15 provides PC readback."
      ],
      [
        "Microcoded arithmetic",
        "Signed MUL/MULS and DIV/DIVS run across multiple cycles while instruction fetch stalls. Dedicated controllers and arithmetic datapaths sequence operations and write results to Rd and R12."
      ],
      [
        "Integration contributions",
        "My work included register-file development, ALU/branch integration, signed division and stack integration, and separating multiplication arithmetic into its own datapath for clearer RTL control."
      ],
      [
        "Verification",
        "The team used directed Verilog testbenches, Icarus Verilog regression scripts, classwide program tests, and forced-fault checks. The project documents both positive regression results and intentional error detection."
      ]
    ],
    "results": "The final class submission recorded 20/20 internal regression passes and detected 9/9 deliberately injected faults. The portfolio keeps the source, scripts, documentation and original final report; those numbers are from the submitted report.",
    "gallery": [
      [
        "SCC_32bit_Processor/media/scc_architecture.svg",
        "Functional processor architecture"
      ],
      [
        "SCC_32bit_Processor/media/scc_microcode.svg",
        "Signed MUL and DIV execution paths"
      ]
    ],
    "report": "SCC_32bit_Processor/docs/Final_SCC_Report.pdf",
    "source": "SCC_32bit_Processor",
    "notes": "Functional partitions are not a pipelined processor. This was team work, and the project credits collaborators and course-provided material."
  },
  {
    "slug": "audio-tracking-car",
    "title": "Audio-Tracking Autonomous Car",
    "subtitle": "From microphone filters to motor-control decisions.",
    "kind": "Circuit Design / Robotics",
    "group": "embedded",
    "year": "Spring 2025",
    "featured": true,
    "priority": 3,
    "summary": "An autonomous two-wheel vehicle that detects sound frequencies through analog filters and comparator interfaces, then uses a Raspberry Pi to steer toward a source.",
    "image": "Audio_Tracking_Autonomous_Car/media/photos/car_prototype.jpg",
    "imageAlt": "Assembled audio-tracking car prototype with microphone housing and breadboard circuitry",
    "tech": [
      "Analog Filters",
      "Raspberry Pi",
      "Python",
      "GPIO",
      "H-Bridge",
      "KiCad",
      "PCB Design"
    ],
    "metrics": [
      [
        "C6 / C8",
        "Targeted audio tones"
      ],
      [
        "2",
        "Driven DC motors"
      ],
      [
        "24 V",
        "Prototype power architecture"
      ]
    ],
    "overview": "A team design-methodology project spanning microphone analog electronics, frequency-selective conditioning, comparators, Raspberry Pi GPIO, drive controls, and PCB design documentation.",
    "sections": [
      [
        "Analog front end",
        "The group characterized a microphone and designed active band-pass filtering around two target musical tones. Comparator stages translated conditioned signals to GPIO-readable levels."
      ],
      [
        "Autonomous behavior",
        "Python code samples signal strengths while rotating the vehicle, estimates the direction of strongest reception, and drives DC motors using a motor-driver interface. Other modes execute straight, square and figure-eight patterns."
      ],
      [
        "Circuit and PCB work",
        "The development record includes supply design, filtering, signal conditioning, GPIO protection, an integrated schematic, PCB routing and 3D rendering. The photographed prototype uses breadboarded electronics; PCB design images are separate artifacts."
      ],
      [
        "Documentation and collaboration",
        "The complete group technical record captures successive engineering decisions and bench experiments. My contributions included technical documentation leadership and cross-functional engineering support."
      ]
    ],
    "results": "The documented work includes hardware experiments, audio characterization, motor-control demonstrations, PCB design deliverables and a final vehicle prototype.",
    "gallery": [
      [
        "Audio_Tracking_Autonomous_Car/media/photos/car_prototype.jpg",
        "Original prototype"
      ],
      [
        "Audio_Tracking_Autonomous_Car/media/pcb_schematic.png",
        "System circuit schematic"
      ],
      [
        "Audio_Tracking_Autonomous_Car/media/pcb_layout.png",
        "PCB routing view"
      ],
      [
        "Audio_Tracking_Autonomous_Car/media/pcb_3d_render.png",
        "PCB design rendering"
      ]
    ],
    "report": "Audio_Tracking_Autonomous_Car/docs/Technical Documentation - Group 11.pdf",
    "source": "Audio_Tracking_Autonomous_Car",
    "video": "https://www.youtube.com/watch?v=HQ8RJdJg2CQ",
    "notes": "The breadboard prototype and custom PCB design are distinct artifacts. Circuit documentation is a record of the course build and is not a ready-to-manufacture consumer design."
  },
  {
    "slug": "reaction-time-button",
    "title": "Reaction-Time Training Button",
    "subtitle": "A sensor-driven interactive device with a designed PCB and enclosure.",
    "kind": "Embedded Hardware / PCB",
    "group": "embedded",
    "year": "Fall 2025",
    "featured": true,
    "priority": 4,
    "summary": "A MicroPython reaction-time device using an FSR sensor, OLED display, visual response cue, PCB design, 3D enclosure and optional IoT telemetry.",
    "image": "reaction_time_training_button/media/photos/Final_Product.jpg",
    "imageAlt": "Finished reaction-time button device",
    "tech": [
      "PCB Design",
      "MicroPython",
      "Raspberry Pi Pico",
      "Sensors",
      "I²C OLED",
      "ThingSpeak",
      "3D CAD"
    ],
    "metrics": [
      [
        "FSR",
        "Force-based interaction"
      ],
      [
        "I²C",
        "OLED interface"
      ],
      [
        "Wi-Fi",
        "Optional telemetry"
      ]
    ],
    "overview": "An embedded sensing system that measures how quickly a user responds to a randomized cue. It combines sensor conditioning, a device state machine, user feedback and a physical packaged design.",
    "sections": [
      [
        "Sensor and circuit design",
        "The system integrates a force-sensitive resistor, an infrared sensor and a thermistor with the microcontroller and power system. Hardware documentation includes the wiring schematic, PCB routing and manufacturing-oriented 3D views."
      ],
      [
        "Firmware architecture",
        "MicroPython runs a randomized prompt cycle, measures the response, handles false starts, displays feedback on an SSD1306 OLED and controls visual cues."
      ],
      [
        "Enclosure and usability",
        "The project includes CAD for a 3D-printed enclosure and photographs of the assembled prototype. User interaction drove both the circuit and firmware decisions."
      ],
      [
        "Connectivity and limits",
        "The code includes Wi-Fi and ThingSpeak helpers for storing reaction results. Private credentials are excluded from the Git repository, and original hardware is needed for full reproduction."
      ]
    ],
    "results": "The repository includes the original final report, working prototype images, schematic, enclosure and PCB design files, firmware and a recorded demo.",
    "gallery": [
      [
        "reaction_time_training_button/media/photos/Final_Product.jpg",
        "Completed device"
      ],
      [
        "reaction_time_training_button/hardware/pcb/3D_Renderings/3D Rendering.png",
        "PCB 3D render"
      ],
      [
        "reaction_time_training_button/hardware/pcb/3D_Renderings/Routing.png",
        "PCB routing"
      ],
      [
        "reaction_time_training_button/media/photos/Final_circuit.jpg",
        "Prototype circuitry"
      ]
    ],
    "report": "reaction_time_training_button/docs/Sensors_Project_Report.pdf",
    "source": "reaction_time_training_button",
    "notes": "Requires original Pico hardware, sensor and board wiring; the public source is not a newly hardware-verified release."
  },
  {
    "slug": "seven-segment-clock",
    "title": "Seven-Segment Clock & Timer",
    "subtitle": "Sequential digital interfacing with measured timing drift.",
    "kind": "Embedded / Digital Circuits",
    "group": "embedded",
    "year": "Spring 2026",
    "featured": true,
    "priority": 5,
    "summary": "A Raspberry Pi clock with DFF-latched four-digit seven-segment displays, a 4×4 keypad, interface state machine and two-hour timing experiments.",
    "image": "SSD_Clock_Timer/media/screenshots/hardware_setup.png",
    "imageAlt": "Four digit seven-segment Raspberry Pi clock and timer hardware setup",
    "tech": [
      "Raspberry Pi",
      "Digital Logic",
      "D Flip-Flops",
      "GPIO",
      "Python",
      "Timing Analysis"
    ],
    "metrics": [
      [
        "4",
        "Seven-segment digits"
      ],
      [
        "0.76%",
        "Manual timing error"
      ],
      [
        "2 hours",
        "Measurement duration"
      ]
    ],
    "overview": "Designed a multi-mode clock and timer interface around a Raspberry Pi with GPIO-controlled display latches, keypad input and calibrated timekeeping.",
    "sections": [
      [
        "Digital interface",
        "D-type flip-flop latches allow a shared segment bus to drive four display digits. The circuit and software coordinate digit selection and stable visual output."
      ],
      [
        "State machine and controls",
        "A keypad controls IDLE, automatic time display and manual time entry. Debouncing, digit blinking and error feedback help make the device usable."
      ],
      [
        "Measured timekeeping",
        "The team compared a calibrated busy-loop implementation against a sleep-based approach in two-hour experiments. The recorded manual approach drifted 55 seconds, versus 295 seconds for the original comparison."
      ],
      [
        "Engineering context",
        "These measurements reflect the specific original Linux system and workload. They are not a general claim that busy loops are more accurate than operating-system or hardware clocks."
      ]
    ],
    "results": "The original two-hour tests recorded approximately 0.764% error for the calibrated loop and 4.097% for the comparison method. Photos, plots and source code are available in the project.",
    "gallery": [
      [
        "SSD_Clock_Timer/media/screenshots/hardware_setup.png",
        "Hardware assembly"
      ],
      [
        "SSD_Clock_Timer/media/screenshots/manual_timing_drift_graph.png",
        "Manual timing drift"
      ],
      [
        "SSD_Clock_Timer/media/screenshots/sleep_timing_drift_graph.png",
        "Comparison timing drift"
      ]
    ],
    "report": "SSD_Clock_Timer/docs/Group7_SSD_Clock_Timer_Report.pdf",
    "source": "SSD_Clock_Timer",
    "video": "https://youtu.be/tlYcAgZpxhg",
    "notes": "A team course build based on Raspberry Pi GPIO hardware. No fresh timing experiments were performed for the website."
  },
  {
    "slug": "robotics-research",
    "title": "Robotic Inspection Research",
    "subtitle": "Perception, robotic manipulation and automated quality inspection.",
    "kind": "Robotics / Research",
    "group": "research",
    "year": "Summer 2025",
    "featured": true,
    "priority": 6,
    "summary": "Computer vision and robot-integration work using YOLO, depth data, oriented bounding boxes, 6D pose estimation, automated scanning and inspection reports.",
    "image": "Research_Documentation/Research_Memo.pdf",
    "imageAlt": "Robotic inspection research memo",
    "tech": [
      "Python",
      "OpenCV",
      "YOLOv8",
      "3D Vision",
      "PCA",
      "UR5e / DOBOT",
      "Gocator"
    ],
    "metrics": [
      [
        "6D",
        "Object pose estimation"
      ],
      [
        "2",
        "Manipulator platforms"
      ],
      [
        "3D",
        "Automated scan reports"
      ]
    ],
    "overview": "Research in the University of Georgia robotics lab on aligning perceived objects with robot and scanner workflows for autonomous quality inspection.",
    "sections": [
      [
        "Perception pipeline",
        "Worked with object detection and depth data to estimate geometry, construct principal-component-oriented bounding boxes and determine poses suitable for robotics."
      ],
      [
        "Robot integration",
        "The experimental system used DOBOT and UR5e manipulators. Integration work included robot communication, program sequencing and resolving physical-interface issues."
      ],
      [
        "Automated inspection",
        "Connected scanning output with structured measurements, pass/fail reporting and generated PDF documentation to streamline inspection workflows."
      ],
      [
        "Research publication",
        "The AutoInspector NSF research-record page is publicly discoverable. Access to the associated publication may remain limited until 2027; the research and any publication are collaborative outputs."
      ]
    ],
    "results": "The repository contains a detailed research memo with implementation notes, diagrams and video references. Published material is credited to the broader laboratory team.",
    "gallery": [],
    "report": "Research_Documentation/Research_Memo.pdf",
    "source": "Research_Documentation",
    "external": [
      [
        "AutoInspector research record",
        "https://par.nsf.gov/biblio/10716809-autoinspector-autonomous-robotic-scanning-framework-quality-inspection"
      ]
    ],
    "notes": "Research documentation is public; the complete laboratory codebase and all experiment data are not released in this portfolio."
  },
  {
    "slug": "diagonal-sum-analyzer",
    "title": "Parallel Diagonal Sum Analyzer",
    "subtitle": "Multi-threaded matrix processing in C.",
    "kind": "Systems Programming",
    "group": "software",
    "year": "Course project",
    "featured": false,
    "priority": 7,
    "summary": "A POSIX-threaded C program that finds contiguous diagonal windows matching a target sum in square digit grids.",
    "tech": [
      "C",
      "POSIX Threads",
      "Memory Management",
      "GNU Make",
      "Sliding Windows"
    ],
    "metrics": [
      [
        "1–3",
        "Worker threads"
      ],
      [
        "2",
        "Diagonal directions"
      ],
      [
        "C",
        "Systems programming"
      ]
    ],
    "overview": "A systems-programming exercise focused on thread partitioning, manual memory management and data-parallel diagonal searches.",
    "sections": [
      [
        "Algorithm",
        "Enumerates both diagonal directions and applies a sliding window to positive-digit sequences to identify contiguous segments matching a supplied target sum."
      ],
      [
        "Parallelism",
        "Splits diagonal work across one to three POSIX threads and combines matching cells into an output grid."
      ],
      [
        "Reproducibility",
        "The repository includes sample grids, expected outputs, a corrected Makefile, and a minimal smoke-test script."
      ]
    ],
    "results": "The original sample input and expected output remain in the repository. The site does not claim newly measured multicore speedups.",
    "gallery": [],
    "source": "diagonal_sum_analyzer",
    "notes": "Requires a POSIX environment with pthreads and a C compiler."
  },
  {
    "slug": "geography-quiz",
    "title": "Geography Game Show Quiz",
    "subtitle": "Desktop JavaFX application with data-driven questions.",
    "kind": "Software Development",
    "group": "software",
    "year": "Course project",
    "featured": false,
    "priority": 8,
    "summary": "A JavaFX desktop quiz featuring randomized country/continent questions, CSV-backed data and local score history.",
    "tech": [
      "Java",
      "JavaFX",
      "Maven",
      "OOP",
      "Apache Commons CSV"
    ],
    "metrics": [
      [
        "6",
        "Questions per round"
      ],
      [
        "CSV",
        "Country dataset"
      ],
      [
        "JavaFX",
        "Desktop UI"
      ]
    ],
    "overview": "An object-oriented Java desktop application with separate modules for the GUI, quiz questions, scoring, persistence and CSV loading.",
    "sections": [
      [
        "Interface",
        "JavaFX windows display radio-button answers, timed correctness feedback, previous results and a help screen."
      ],
      [
        "Data and persistence",
        "The question pool loads from a project-bundled CSV resource and quiz results are serialized locally."
      ],
      [
        "Portability cleanup",
        "The portfolio source removes a university-specific absolute CSV path and uses a classpath resource loader instead."
      ]
    ],
    "results": "Original course application source and JavaFX Maven project are publicly available.",
    "gallery": [],
    "source": "game_show_quiz",
    "notes": "Requires a graphical JavaFX environment; newly rerun GUI tests are not claimed."
  },
  {
    "slug": "snake-game",
    "title": "Snake Game in C",
    "subtitle": "A compact Windows-console game loop.",
    "kind": "Software Fundamentals",
    "group": "software",
    "year": "Course project",
    "featured": false,
    "priority": 9,
    "summary": "A keyboard-driven Snake game in C with collision detection, scorekeeping, moving tail segments and timed console refresh.",
    "tech": [
      "C",
      "Windows Console",
      "Game State",
      "Input Handling"
    ],
    "metrics": [
      [
        "C",
        "Implementation"
      ],
      [
        "W A S D",
        "Controls"
      ],
      [
        "33 ms",
        "Nominal frame delay"
      ]
    ],
    "overview": "A compact introduction to game-state updates and interactive terminal input, built with Windows console functions.",
    "sections": [
      [
        "Game logic",
        "Maintains board coordinates, snake segments and food. Movement, scoring and wall/self-collision rules update on each frame."
      ],
      [
        "Input handling",
        "Nonblocking console input maps W/A/S/D to direction controls and prevents immediate reversals."
      ],
      [
        "Build assumptions",
        "Uses Windows-specific headers and console APIs. The portfolio version documents MinGW and Visual Studio compile commands."
      ]
    ],
    "results": "The project is presented as a supporting programming example, not a major digital-hardware project.",
    "gallery": [],
    "source": "snake_game",
    "notes": "Windows-only and intentionally simple; the original game was not freshly play-tested in this website build."
  }
];
