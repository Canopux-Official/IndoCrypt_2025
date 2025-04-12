import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, MapPin } from 'lucide-react';

const ScheduleCard = ({ time, topic, speaker, venue }) => {
  return (
    <motion.div
      className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-indigo-700 mb-2">{topic}</h3>

      <div className="flex items-center text-sm text-gray-600 mb-1">
        <Clock className="h-4 w-4 mr-2" />
        {time}
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-1">
        <User className="h-4 w-4 mr-2" />
        {speaker}
      </div>

      <div className="flex items-center text-sm text-gray-600">
        <MapPin className="h-4 w-4 mr-2" />
        {venue}
      </div>
    </motion.div>
  );
};

export default ScheduleCard;
