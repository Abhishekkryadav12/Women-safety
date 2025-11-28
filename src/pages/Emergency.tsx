import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Plus, Trash2, Edit } from "lucide-react";
import { toast } from "sonner";

interface Contact {
  id: string;
  name: string;
  phone: string;
  relation: string;
}

const Emergency = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: "1", name: "Parent", phone: "+91 98765 43210", relation: "Family" },
    { id: "2", name: "Friend", phone: "+91 98765 43211", relation: "Friend" },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", phone: "", relation: "" });

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && newContact.relation) {
      setContacts([
        ...contacts,
        { id: Date.now().toString(), ...newContact }
      ]);
      setNewContact({ name: "", phone: "", relation: "" });
      setIsAdding(false);
      toast.success("Emergency contact added!");
    } else {
      toast.error("Please fill all fields");
    }
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
    toast.success("Contact removed");
  };

  const handleCallContact = (name: string, phone: string) => {
    toast.success(`Calling ${name}: ${phone}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Phone className="h-8 w-8 text-primary" />
            Emergency Contacts
          </h1>
          <p className="text-muted-foreground">
            Manage your emergency contacts for quick access during crisis
          </p>
        </div>

        {/* Add Contact Button */}
        <div className="mb-6">
          {!isAdding ? (
            <Button onClick={() => setIsAdding(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Emergency Contact
            </Button>
          ) : (
            <Card className="shadow-soft border-primary">
              <CardHeader>
                <CardTitle>Add New Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Contact name"
                      value={newContact.name}
                      onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={newContact.phone}
                      onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relation">Relation</Label>
                    <Input
                      id="relation"
                      placeholder="e.g., Family, Friend"
                      value={newContact.relation}
                      onChange={(e) => setNewContact({ ...newContact, relation: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleAddContact}>Save Contact</Button>
                  <Button onClick={() => setIsAdding(false)} variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <Card key={contact.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground">{contact.relation}</p>
                  </div>
                  <Button
                    onClick={() => handleDeleteContact(contact.id)}
                    variant="ghost"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <p className="text-primary font-medium mb-4">{contact.phone}</p>
                <Button
                  onClick={() => handleCallContact(contact.name, contact.phone)}
                  className="w-full"
                  size="sm"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {contacts.length === 0 && (
          <Card className="shadow-soft">
            <CardContent className="p-12 text-center">
              <Phone className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Emergency Contacts</h3>
              <p className="text-muted-foreground mb-4">
                Add your trusted contacts for quick access during emergencies
              </p>
              <Button onClick={() => setIsAdding(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Contact
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Emergency;
