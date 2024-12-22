import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-[#c4a777] mt-1" />
          <div>
            <h3 className="font-semibold text-[#1a237e]">Email</h3>
            <p className="text-gray-600">contact@atlaslegal.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-[#c4a777] mt-1" />
          <div>
            <h3 className="font-semibold text-[#1a237e]">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-[#c4a777] mt-1" />
          <div>
            <h3 className="font-semibold text-[#1a237e]">Address</h3>
            <p className="text-gray-600">
              123 Legal Avenue<br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="h-6 w-6 text-[#c4a777] mt-1" />
          <div>
            <h3 className="font-semibold text-[#1a237e]">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: By appointment only<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}