import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({themeStyle}: {themeStyle: string}) => {
    return(
        <AnimatePresence mode="wait">
            { themeStyle === "dark" ?
                <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <Moon />
                </motion.div>
                :
                <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <Sun />
                </motion.div>
            }
        </AnimatePresence>
    )
}