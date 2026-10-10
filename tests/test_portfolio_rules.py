"""Consistency checks for the user-requested DevOps project count."""
import re
import unittest
from pathlib import Path

class PortfolioRules(unittest.TestCase):
    def test_one_devops_project_in_progress(self):
        projects = Path('src/components/portfolio/Projects.tsx').read_text()
        statuses = re.findall(r'status: "(In Progress|Planned)", category: "devops"', projects)
        self.assertEqual(statuses.count('In Progress'), 1)
        self.assertEqual(statuses.count('Planned'), 3)
        about = Path('src/components/portfolio/About.tsx').read_text()
        match = re.search(r'k: "(\d+)", v: "DevOps Projects In Progress"', about)
        self.assertIsNotNone(match)
        if match:
            self.assertEqual(int(match.group(1)), statuses.count('In Progress'))

if __name__ == '__main__':
    unittest.main()
