export const overlayVariants = {
  visible: {
    opacity: 1,
    height: '100%',
    width: '100%',
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    height: '0%',
    width: '0%',
    transition: {
      ease: 'anticipate',
      duration: 1.8,
    },
  },
}

export const modalVariants = {
  visible: {
    opacity: 1,
    height: '80%',
    width: '85%',
    overflow: 'hidden',
    transition: {
      ease: 'anticipate',
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    height: '0%',
    width: '0%',
    overflow: 'hidden',
    transition: {
      ease: 'linear',
      duration: 0.5,
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
