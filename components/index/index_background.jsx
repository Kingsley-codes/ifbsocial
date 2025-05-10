import React from "react";
import { motion } from "framer-motion";

export default function Index_background({ indexH }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="flex items-center justify-center w-[2250px] h-[2250px]  border-2 border-blue-500 rounded-full"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: indexH !== 1 ? 0.9 : 1,
          scale: indexH !== 1 ? 1 : 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 5000,
        }}
      >
        <motion.div
          className="flex items-center justify-center w-[2100px] h-[2100px]  border-2 border-blue-500 rounded-full"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: indexH !== 1 ? 0.9 : 1,
            scale: indexH !== 1 ? 1 : 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 5000,
          }}
        >
          <motion.div
            className="flex items-center justify-center w-[1950px] h-[1950px]  border-2 border-blue-500 rounded-full"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: indexH !== 1 ? 0.9 : 1,
              scale: indexH !== 1 ? 1 : 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 5000,
            }}
          >
            <motion.div
              className="flex items-center justify-center w-[1700px] h-[1700px]  border-2 border-blue-500 rounded-full"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: indexH !== 1 ? 0.9 : 1,
                scale: indexH !== 1 ? 1 : 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 5000,
              }}
            >
              <motion.div
                className="flex items-center justify-center w-[1550px] h-[1550px]  border-2 border-blue-500 rounded-full"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: indexH !== 1 ? 0.9 : 1,
                  scale: indexH !== 1 ? 1 : 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 5000,
                }}
              >
                <motion.div
                  className="flex items-center justify-center w-[1400px] h-[1400px]  border-2 border-blue-500 rounded-full"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: indexH !== 1 ? 0.9 : 1,
                    scale: indexH !== 1 ? 1 : 0.9,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 5000,
                  }}
                >
                  <motion.div
                    className="flex items-center justify-center w-[1250px] h-[1250px]  border-2 border-blue-500 rounded-full"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: indexH !== 1 ? 0.9 : 1,
                      scale: indexH !== 1 ? 1 : 0.9,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 5000,
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[1100px] h-[1100px]  border-2 border-blue-500 rounded-full"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: indexH !== 1 ? 0.9 : 1,
                        scale: indexH !== 1 ? 1 : 0.9,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 5000,
                      }}
                    >
                      <motion.div
                        className="flex items-center justify-center w-[950px] h-[950px]  border-2 border-blue-500 rounded-full"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: indexH !== 1 ? 0.9 : 1,
                          scale: indexH !== 1 ? 1 : 0.9,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 5000,
                        }}
                      >
                        <motion.div
                          className="flex items-center justify-center w-[800px] h-[800px]  border-2 border-blue-500 rounded-full"
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: indexH !== 1 ? 0.9 : 1,
                            scale: indexH !== 1 ? 1 : 0.9,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 5000,
                          }}
                        >
                          <motion.div
                            className="flex items-center justify-center w-[650px] h-[650px]  border-2 border-blue-500 rounded-full"
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: indexH !== 1 ? 0.9 : 1,
                              scale: indexH !== 1 ? 1 : 0.9,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 5000,
                            }}
                          >
                            <motion.div
                              className="flex items-center justify-center w-[500px] h-[500px]  border-2 border-blue-500 rounded-full"
                              initial={{
                                opacity: 0,
                              }}
                              animate={{
                                opacity: indexH !== 1 ? 0.9 : 1,
                                scale: indexH !== 1 ? 1 : 0.9,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 5000,
                              }}
                            >
                              <motion.div
                                className="flex items-center justify-center w-[350px] h-[350px]  border-2 border-blue-500 rounded-full"
                                initial={{
                                  opacity: 0,
                                }}
                                animate={{
                                  opacity: indexH !== 1 ? 0.9 : 1,
                                  scale: indexH !== 1 ? 1 : 0.9,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 5000,
                                }}
                              >
                                <motion.div
                                  className="flex items-center justify-center w-[200px] h-[200px]  border-2 border-blue-500 rounded-full"
                                  initial={{
                                    opacity: 0,
                                  }}
                                  animate={{
                                    opacity: indexH !== 1 ? 0.9 : 1,
                                    scale: indexH !== 1 ? 1 : 0.9,
                                  }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 5000,
                                  }}
                                >
                                  <motion.div
                                    className="flex items-center justify-center w-[50px] h-[50px]  border-2 border-blue-500 rounded-full bg-blue-500"
                                    initial={{
                                      opacity: 0,
                                    }}
                                    animate={{
                                      opacity: indexH !== 1 ? 0.9 : 1,
                                      scale: indexH !== 1 ? 1 : 0.9,
                                    }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 5000,
                                    }}
                                  ></motion.div>
                                </motion.div>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
