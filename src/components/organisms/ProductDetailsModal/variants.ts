export const modalVariants = {
  visible: {
    opacity: 1,
    width: '85%',
    maxHeight: 'unset',
    overflow: 'hidden',
    transition: {
      ease: 'anticipate',
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    maxHeight: '0%',
    width: '0%',
    overflow: 'hidden',
    transition: {
      ease: 'anticipate',
      duration: 0.6,
    },
  },
}

export const modalContentVariants = {
  visible: {
    opacity: 1,
    overflow: 'hidden',
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    overflow: 'hidden',
    transition: {
      duration: 3,
    },
  },
}
