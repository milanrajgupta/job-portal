import { Component } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
  category: string;
}
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQSComponent {
  selectedCategory = 'all';
  
  faqs: FAQ[] = [
    // Marketing
    {
      question: 'How can I improve my marketing strategy?',
      answer: 'We provide detailed analytics and insights to optimize your marketing campaigns...',
      isOpen: false,
      category: 'marketing'
    },
    {
      question: 'What marketing tools are included?',
      answer: 'Our platform includes email marketing, social media integration, and analytics tools...',
      isOpen: false,
      category: 'marketing'
    },
    
    // Buying
    {
      question: 'How does the buying process work?',
      answer: 'The buying process is streamlined into simple steps...',
      isOpen: false,
      category: 'buying'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers...',
      isOpen: false,
      category: 'buying'
    },
    
    // User Manual
    {
      question: 'How do I get started with the platform?',
      answer: 'Our user-friendly onboarding process guides you through each step...',
      isOpen: false,
      category: 'userManual'
    },
    {
      question: 'Where can I find tutorial videos?',
      answer: 'Tutorial videos are available in our learning center...',
      isOpen: false,
      category: 'userManual'
    },
    
    // Payments
    {
      question: 'How do refunds work?',
      answer: 'Refunds are processed within 3-5 business days...',
      isOpen: false,
      category: 'payments'
    },
    {
      question: 'Do you offer recurring billing?',
      answer: 'Yes, we offer flexible recurring billing options...',
      isOpen: false,
      category: 'payments'
    },
    
    // Terms & Conditions
    {
      question: 'What are your terms of service?',
      answer: 'Our terms of service outline usage rights and responsibilities...',
      isOpen: false,
      category: 'terms'
    },
    {
      question: 'How do you handle privacy?',
      answer: 'We take privacy seriously and follow strict data protection guidelines...',
      isOpen: false,
      category: 'terms'
    },
    
    // Account
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password through the account settings...',
      isOpen: false,
      category: 'account'
    },
    {
      question: 'Can I have multiple users?',
      answer: 'Yes, our platform supports multiple user accounts with different permission levels...',
      isOpen: false,
      category: 'account'
    }
  ];

  get filteredFaqs(): FAQ[] {
    return this.selectedCategory === 'all' 
      ? this.faqs 
      : this.faqs.filter(faq => faq.category === this.selectedCategory);
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
  }

  toggleFaq(index: number) {
    const faqIndex = this.faqs.indexOf(this.filteredFaqs[index]);
    this.faqs[faqIndex].isOpen = !this.faqs[faqIndex].isOpen;
  }
}
