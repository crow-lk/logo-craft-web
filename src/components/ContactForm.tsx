import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  MapPin,
  Package,
  ArrowRightLeft,
  Ship,
  Clock,
  FileText,
  Upload,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const districts = [
  "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
  "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar",
  "Mullaitivu", "Vavuniya", "Trincomalee", "Batticaloa", "Ampara",
  "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
  "Monaragala", "Ratnapura", "Kegalle", "Other"
];

const serviceOptions = [
  "Sourcing & Procurement (S2S)",
  "Freight & Logistics Coordination",
  "Customs & Trade Compliance",
  "Documentation / Bank Pack",
  "Importer of Record (IOR) Advisory",
  "E-commerce / Digital Trade",
  "Not sure (Help me choose)"
];

const tradeTypes = [
  "Import to Sri Lanka",
  "Export from Sri Lanka",
  "Both"
];

const shipmentModes = [
  "Courier",
  "Air Freight",
  "Sea-LCL",
  "Sea-FCL",
  "Not sure"
];

const timelines = [
  "Urgent: Less than 2 weeks",
  "2–6 weeks",
  "6+ weeks"
];

const valueRanges = [
  "Less than $1,000",
  "$1,000 – $5,000",
  "$5,000 – $25,000",
  "$25,000 – $100,000",
  "More than $100,000"
];

interface FormData {
  // Step 1
  fullName: string;
  companyName: string;
  email: string;
  mobile: string;
  website: string;
  district: string;
  // Step 2
  serviceNeeded: string;
  tradeType: string;
  // Step 3
  productDescription: string;
  countryOriginDestination: string;
  shipmentMode: string;
  timeline: string;
  estimatedValue: string;
  hasClearingAgent: string;
  hasSupplier: string;
  // Step 4
  notes: string;
  consent: boolean;
}

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    website: "",
    district: "",
    serviceNeeded: "",
    tradeType: "",
    productDescription: "",
    countryOriginDestination: "",
    shipmentMode: "",
    timeline: "",
    estimatedValue: "",
    hasClearingAgent: "",
    hasSupplier: "",
    notes: "",
    consent: false,
  });

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.companyName && formData.email && formData.mobile;
      case 2:
        return formData.serviceNeeded && formData.tradeType;
      case 3:
        return true; // All optional
      case 4:
        return formData.consent;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const stepIndicators = [
    { step: 1, label: "Contact", icon: User },
    { step: 2, label: "Service", icon: Package },
    { step: 3, label: "Details", icon: Ship },
    { step: 4, label: "Submit", icon: Send },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-card rounded-3xl p-12 border border-border shadow-xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your request is received. We will respond within 1 business day.
            </p>
            <p className="text-muted-foreground">
              If urgent, please{" "}
              <a 
                href="https://wa.me/94772251443" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                WhatsApp us
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Request Trade Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Share a few details so we can guide you faster (HS/permits/routing).
          </p>
        </motion.div>

        {/* Step indicators */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-between items-center relative">
            {/* Progress line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {stepIndicators.map((indicator) => (
              <div key={indicator.step} className="flex flex-col items-center relative z-10">
                <motion.div 
                  animate={{ 
                    scale: currentStep === indicator.step ? 1.1 : 1,
                    backgroundColor: currentStep >= indicator.step ? "hsl(var(--primary))" : "hsl(var(--muted))"
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-background shadow-lg ${
                    currentStep >= indicator.step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > indicator.step ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <indicator.icon className="w-5 h-5" />
                  )}
                </motion.div>
                <span className={`mt-2 text-sm font-medium ${
                  currentStep >= indicator.step ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {indicator.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <motion.div 
          className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-10 border border-border shadow-xl"
          layout
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Contact */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Step 1 — Contact Information</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">Required</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="fullName"
                          placeholder="Your full name"
                          className="pl-10"
                          value={formData.fullName}
                          onChange={(e) => updateFormData("fullName", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="companyName"
                          placeholder="Your company name"
                          className="pl-10"
                          value={formData.companyName}
                          onChange={(e) => updateFormData("companyName", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile / WhatsApp *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="mobile"
                          placeholder="+94 7X XXX XXXX"
                          className="pl-10"
                          value={formData.mobile}
                          onChange={(e) => updateFormData("mobile", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-muted-foreground">Optional</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="website">Website / Social Link</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="website"
                          placeholder="https://..."
                          className="pl-10"
                          value={formData.website}
                          onChange={(e) => updateFormData("website", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">City / District</Label>
                      <Select value={formData.district} onValueChange={(value) => updateFormData("district", value)}>
                        <SelectTrigger id="district">
                          <MapPin className="w-4 h-4 text-muted-foreground mr-2" />
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district} value={district}>{district}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Routing */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Step 2 — What do you need?</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="serviceNeeded">Service Needed *</Label>
                    <Select value={formData.serviceNeeded} onValueChange={(value) => updateFormData("serviceNeeded", value)}>
                      <SelectTrigger id="serviceNeeded">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tradeType">Trade Type *</Label>
                    <Select value={formData.tradeType} onValueChange={(value) => updateFormData("tradeType", value)}>
                      <SelectTrigger id="tradeType">
                        <ArrowRightLeft className="w-4 h-4 text-muted-foreground mr-2" />
                        <SelectValue placeholder="Select trade type" />
                      </SelectTrigger>
                      <SelectContent>
                        {tradeTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Shipment Details */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Ship className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Step 3 — Shipment / Requirement</h3>
                </div>

                <p className="text-sm text-muted-foreground">All fields optional but helpful for faster guidance.</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="productDescription">Product Description</Label>
                    <Textarea
                      id="productDescription"
                      placeholder="Describe your product (e.g., industrial machinery, textiles, electronics)"
                      rows={3}
                      value={formData.productDescription}
                      onChange={(e) => updateFormData("productDescription", e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="countryOriginDestination">Country of Origin / Destination</Label>
                      <Input
                        id="countryOriginDestination"
                        placeholder="e.g., China, India, UK"
                        value={formData.countryOriginDestination}
                        onChange={(e) => updateFormData("countryOriginDestination", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shipmentMode">Shipment Mode</Label>
                      <Select value={formData.shipmentMode} onValueChange={(value) => updateFormData("shipmentMode", value)}>
                        <SelectTrigger id="shipmentMode">
                          <Ship className="w-4 h-4 text-muted-foreground mr-2" />
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          {shipmentModes.map((mode) => (
                            <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                        <SelectTrigger id="timeline">
                          <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((tl) => (
                            <SelectItem key={tl} value={tl}>{tl}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estimatedValue">Estimated Shipment Value</Label>
                      <Select value={formData.estimatedValue} onValueChange={(value) => updateFormData("estimatedValue", value)}>
                        <SelectTrigger id="estimatedValue">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          {valueRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hasClearingAgent">Do you have a clearing agent?</Label>
                      <Select value={formData.hasClearingAgent} onValueChange={(value) => updateFormData("hasClearingAgent", value)}>
                        <SelectTrigger id="hasClearingAgent">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hasSupplier">Do you have a supplier?</Label>
                      <Select value={formData.hasSupplier} onValueChange={(value) => updateFormData("hasSupplier", value)}>
                        <SelectTrigger id="hasSupplier">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Documents & Submit */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Step 4 — Additional Information</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes / Questions</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information, questions, or specific requirements..."
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => updateFormData("notes", e.target.value)}
                    />
                  </div>

                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="flex items-start gap-3">
                      <Upload className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Document Upload (Optional)</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          You can send documents (invoice, packing list, quotation, catalogue/datasheet, BOQ) via WhatsApp or email after submitting this form.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => updateFormData("consent", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-foreground cursor-pointer">
                      I consent to Linkcore Lanka contacting me regarding this enquiry. *
                    </Label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            
            {currentStep < totalSteps ? (
              <Button
                variant="gold"
                onClick={() => setCurrentStep(prev => prev + 1)}
                disabled={!canProceed()}
                className="gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                variant="gold"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
