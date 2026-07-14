import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400">{title}</p>

          <h1 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h1>

          <p className="text-green-400 mt-4 text-sm">
            ▲ +12% from yesterday
          </p>

        </div>

        <div className="text-5xl opacity-30">
          {icon}
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;
