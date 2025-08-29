import { motion, AnimatePresence } from "framer-motion"

export const ProjectModal = ({details}) => {
    return (
    <AnimatePresence>
          <motion.div
            className="card-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <div className="modal-content">
              <h3>Project Details</h3>
              <ul>
                {details.map((val, index) => <li key={index}>{val}</li>)}
              </ul>
            </div>
          </motion.div>
    </AnimatePresence>
    )
}