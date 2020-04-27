module.exports = {
  cpp: [
    {
      type: "category",
      label: "Libraries",
      items: [
        "lang/cpp/libraries/cpp-stl",
        "lang/cpp/libraries/cpp-exception-handling",
      ],
    },
    {
      type: "category",
      label: "Advanced C++",
      items: [
        "lang/cpp/advanced-cpp/cpp-constexpr",
        {
          type: "category",
          label: "LLVM",
          items: ["lang/cpp/advanced-cpp/llvm/llvm-basics"],
        },
      ],
    },
  ],
  python: [
    {
      type: "category",
      label: "Libraries",
      items: ["lang/python/libraries/python-logging"],
    },
    {
      type: "category",
      label: "Package",
      items: [
        {
          type: "category",
          label: "Pybind11",
          items: [
            "lang/python/package/pybind11/python-package-pybind11",
            "lang/python/package/pybind11/python-package-pybind11-type",
          ],
        },
      ],
    },
  ],
  flutter: [
    {
      type: "category",
      label: "Engine",
      items: ["lang/flutter/engine/flutter-engine-for-linux-arm64"],
    },
  ],
};
