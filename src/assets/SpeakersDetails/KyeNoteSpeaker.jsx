
import img1 from '../Speaker Images/img1.jpg'
import img2 from '../Speaker Images/img2.jpg'
import img3 from '../Speaker Images/img3.jpg'
import img4 from '../Speaker Images/img4.jpg'
import luca from '../Speaker Images/luca.jpg'

export const KeynoteSpeakers = [

  {
    "id": 1,
    "name": "Shivam Bhasin",
    "desg": "Professor",
    "title": "Cracking Secrets Beyond the Dataset: Revisiting Deep Learning in Side-Channel Analysis",
    "college": "Temasek Lab and National Integrated Center For Evaluation, Nanyang Technological University, Singapore",
    "abstract": "Side-channel analysis (SCA) continues to challenge the security foundations of modern computing systems by exploiting subtle leakages from physical phenomena such as timing, power consumption, and electromagnetic emanations. Over the past decade, the intersection of SCA and deep learning has opened an exciting new chapter in the field. Deep Learning–based Side-Channel Analysis (DLSCA) has shown impressive capabilities—often succeeding where classical methods struggle, and performing well even against countermeasures like hiding and masking. However, despite these advances, most evaluations still rely on simplified datasets collected under ideal conditions. This raises the question: how well do deep models perform when faced with realistic, noisy targets that challenge these assumptions?\n\nThis talk revisits DLSCA from a critical and exploratory perspective. The talk begins with a brief overview of the field, its progress, and key challenges. We then move beyond conventional benchmarks to explore the challenges of applying DLSCA to high-performance platforms such as the Raspberry Pi 4B, powered by a multi-core out-of-order ARM Cortex-A72 processor. Finally, we examine blind side-channel analysis, in which attackers operate without access to plaintexts or ciphertexts—a fundamental assumption in conventional SCA.\n\nThrough these explorations, the talk encourages reflection on the role of deep learning in side-channel analysis, highlighting both its potential and its limitations as the field moves toward more realistic attack scenarios.",
    "image": img2
  },
  {
    "id": 2,
    "name": "Debdeep Mukhopadhyay",
    "desg": "Professor",
    "title": "Every Contact Leaves a Trace: Microarchitecture Leakages in Modern Computing Systems",
    "college": "Indian Institute of Technology Kharagpur, India",
    "abstract": "Modern day computing systems have advanced microarchitectural elements, which are often invisible to the programmer implementing cryptographic algorithms. On one hand while these components aim at enabling high-performance of the computing devices, they often capture traces of secret data which cryptography tries to hide.\n\nAt Secured Embedded Architecture Laboratory (SEAL), Indian Institute of Technology Kharagpur India, we have been engaging in active research on such micro-architectural attacks for over a decade. This talk offers a gist of our experience with developing side-channels when process isolation boundaries (including state-of-the-art trusted architectures) are violated at the micro-architectural level. We present our research experience across several microarchitectural aspects (like branch prediction, speculative vulnerabilities, Model Specific Registers, Out-of-Band System Management (relevant for Trusted Architectures like Intel TDX) as well as across various threat models. We also extend our talk to discuss about our findings in the context of now-more-hot GPU architectures, commercialized by companies like Nvidia, and present our findings on the leakages exhibited by these platforms. Interestingly, we show that these platforms on which our coveted machine learning codes run also leaves significant traces which can lead to piracy of our precious machine learning models.\n\nThe talk also emphasizes the importance of close collaborations between academic research groups and industry. Such collaborations not only help better align expectations wrt. impactful research outputs on both sides, but also help drive multifaceted improvements to security in general. Conversations on both sides have often led to a better understanding of how the security landscape evolves in presence of side-channels. Our experience can hopefully offer a foundation to not only encouraging more such academia/industry collaborations, but also to spreading widespread awareness of the potency of micro-architectural side-channels (even on Trusted Architectures).\n\nThis will enable us to bolster the fact that security can only be achieved by design, and not by obscurity!",
    "image": img4
  },
  {
    "id": 3,
    "name": "Shuichi Katsumata",
    "desg": "Lead Cryptography Researcher",
    "title": "Taking Post-Quantum Cryptography from Theory to Practice: A Case Study with Signal",
    "college": "PQShield & AIST, Japan",
    "abstract": "Not long ago, post-quantum cryptography (PQC) was a topic mainly discussed by academic researchers. However, as governmental bodies and the industry began to realize the massive potential threat posed by quantum computers, the narrative shifted. With NIST publishing five FIPS PQC standards for KEMs and digital signatures mid-2024, the transition to PQC has become highly active. While most classical cryptography can theoretically be replaced by PQC, this does not mean our job as researchers is complete. An illustrative example is the TLS protocol: making it fully post-quantum has proven to be a nightmare for practitioners due to the massive overhead incurred by the new post-quantum KEMs and digital signatures.\n\nIn this keynote, we use Signal as a motivating example where theory alone was not enough. We will walk through our recently deployed Triple Ratchet protocol and provide a preview of the RingXKEM protocol, which, when combined, yields a fully post-quantum Signal protocol. We explain why known theoretical results were insufficient and detail the pragmatic choices, accounting for real-world bandwidth and memory restrictions, that were needed to make the protocol practical.",
    "image": img1
  }

]