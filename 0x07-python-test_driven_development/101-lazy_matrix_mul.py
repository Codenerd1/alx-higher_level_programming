#!/usr/bin/python3
"""A function to define lazy matrix multiplication."""

def lazy_matrix_mul(m_a, m_b):
    """Return the multiplication of two matrices.

    Args:
        m_a (list of lists of ints/floats): The first matrix.
        m_b (list of lists of ints/floats): The second matrix.    """

    return (np.matmul(m_a, m_b))
